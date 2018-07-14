import {
    category
} from './components/category.js';
import {
    carousel
} from './components/carousel.js';
import {
    header
} from './components/header.js';
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
        category.populateData();
    }

    init() {
        bindWindowEvents();
        bindComponentEvents();
        this.populateData();
        search.generateMenuIndex();
    }
}

const bindWindowEvents = () => {
    window.addEventListener('scroll', category.selectCategory);
    window.addEventListener('scroll', header.reduceHeaderOnScroll);
    window.addEventListener('load', header.reduceHeaderOnScroll);
    window.addEventListener('scroll', function () {
        selector.lazyimg().forEach((img => {
            lazyBind(img);
        }));
    });
}

const bindComponentEvents = () => {
    selector.rightarrow().addEventListener('click', carousel.moveRight);
    selector.leftarrow().addEventListener('click', carousel.moveLeft);
    selector.searchbar().addEventListener('keyup', search.searchForInput);
    selector.lazyimg().forEach((img => {
        lazyBind(img);
    }));
    selector.searchIcon().addEventListener('click', search.searchAndGetAll);
    selector.closeIcon().addEventListener('click', search.clearSearch);
}
