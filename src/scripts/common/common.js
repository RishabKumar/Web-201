export const selector = (function () {
    return {
        "leftarrow": () => document.querySelector('.featured-carousel .arrow.left'),
        "rightarrow": () => document.querySelector('.featured-carousel .arrow.right'),
        "featureditems": () => document.querySelectorAll('.featured-carousel .featured-item'),
        "slider": () => document.querySelector('.slider'),
        "categories": () => document.querySelectorAll('.categories li'),
        "categories_ul": () => document.querySelector('.categories ul'),
        "category": () => document.querySelectorAll('section.category:not(.search-result-section)'),
        "categorytarget": () => document.querySelector('section.category:target'),
        "header": () => document.querySelector('header'),
        "menuitems": () => document.querySelector('.menu-items'),
        "lazyimg": () => document.querySelectorAll('img[lazy-img-src]'),
        "menuitemcontainer": () => document.querySelector('.menu-item-container'),
        "searchbar": () => document.querySelector('.search-bar input'),
        "searchresults": () => document.querySelector('.search-results'),
        "searchresultsection": () => document.querySelector('.search-result-section'),
        "searchresultsectionmenuitems": () => document.querySelector('.search-result-section .menu-items'),
        "searchIcon": () => document.querySelector('.search-icon'),
        "closeIcon": () => document.querySelector('.close-icon'),
        "fullmenudiv": () => document.querySelector('.full-menu div'),
        "itemSize": () => document.querySelectorAll('input[name=size]'),
        "reduceQty": () => document.querySelectorAll('a.reduce-qty'),
        "increaseQty": () => document.querySelectorAll('a.increase-qty'),
        "addtocartbtn": () => document.querySelectorAll('button.add-to-cart-btn'),
        "cartcount": () => document.querySelector('.cart-count'),
    };
})();

export class Common {
    static fetchItems(filename) {
        let tmp;
        $.ajax({
            url: '/static/' + filename,
            datatype: "json",
            async: false,
            success: function (items) {
                tmp = Object.values(items);
            }
        });
        return tmp;
    };

    static setCartCount() {
        selector.cartcount().innerText = loadFromCart().length;
    }
}

const loadFromCart = () => {
    let itemstr = localStorage.getItem('cartItems');
    let itemArr;
    if (itemstr === null) {
        return [];
    } else {
        itemArr = JSON.parse(itemstr);
        return itemArr;
    }
}
