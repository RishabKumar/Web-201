import {
    category
} from './components/category.js';
import {
    carousel
} from './components/carousel.js';
import {
    menuItems
} from './components/menuitem.js';
import {
    lazyBind
} from './components/lazy-load.js';
import {
    selector
} from '../common/common.js';
import {
    search
} from './components/search';

export class HomeController {

    constructor() {

    }

    populateData() {
        menuItems.populateData();
        menuItems.populateFullMenuData();
        category.populateData();
    }

    init() {
        this.populateData();
        search.generateMenuIndex();
        bindWindowEvents();
        bindComponentEvents();
    }
}

const bindWindowEvents = () => {
    window.addEventListener('scroll', category.selectCategory);
    window.addEventListener('scroll', function () {
        selector.lazyimg().forEach((img => {
            lazyBind(img);
        }));
    });
};

const bindComponentEvents = () => {
    selector.rightarrow().addEventListener('click', carousel.moveRight);
    selector.leftarrow().addEventListener('click', carousel.moveLeft);
    selector.searchbar().addEventListener('keyup', search.searchForInput);
    selector.lazyimg().forEach((img => {
        lazyBind(img);
    }));
    selector.searchIcon().addEventListener('click', search.searchAndGetAll);
    selector.closeIcon().addEventListener('click', search.clearSearch);
    selector.adddummybtn().forEach((t) => t.addEventListener('focusin', menuItems.showAddToCart));
    selector.adddummybtn().forEach((t) => t.addEventListener('focusout', menuItems.hideAddToCart));
    

    selector.itemSize().forEach((size) => {
        size.addEventListener('click', menuItems.selectSize);
    });

    selector.reduceQty().forEach((t) => {
        t.addEventListener('click', menuItems.reduceQty);
    });
    selector.increaseQty().forEach((t) => {
        t.addEventListener('click', menuItems.increaseQty);
    });
    selector.addtocartbtn().forEach((t) => {
        t.addEventListener('click', menuItems.getSelectedItem);
    });
 
};
