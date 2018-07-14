export const selector = (function () {
    return {
        "leftarrow": () => document.querySelector('.featured-carousel .arrow.left'),
        "rightarrow": () => document.querySelector('.featured-carousel .arrow.right'),
        "featureditems": () => document.querySelectorAll('.featured-carousel .featured-item'),
        "slider": () => document.querySelector('.slider'),
        "categories": () => document.querySelectorAll('.categories li'),
        "categories_ul": () => document.querySelector('.categories ul'),
        "category": () => document.querySelectorAll('section.category'),
        "categorytarget": () => document.querySelector('section.category:target'),
        "header": () => document.querySelector('header'),
        "menuitems": () => document.querySelector('.menu-items'),
        "lazyimg": () => document.querySelectorAll('img[lazy-img-src]'),
        "menuitemcontainer": () => document.querySelector('.menu-item-container'),
        "searchbar": () => document.querySelector('.search-bar input'),
        "searchresults": () => document.querySelector('.search-results'),
        "searchresultsection": () => document.querySelector('.search-result-section'),
        "searchIcon": () => document.querySelector('.search-icon'),
        "closeIcon": () => document.querySelector('.close-icon'),
    };
})();
