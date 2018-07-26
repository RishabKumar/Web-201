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
import firebase from 'firebase';

let storage = '';
export class HomeController {

    constructor() {
        var config = {
            apiKey: "AIzaSyB9NBMkReB1oOkdSO4Csk9qbZPqx4uXh20",
            authDomain: "web201-201.firebaseapp.com",
            databaseURL: "https://web201-201.firebaseio.com",
            projectId: "web201-201",
            storageBucket: "web201-201.appspot.com",
            messagingSenderId: "527954885165"
        };
        firebase.initializeApp(config);
        storage = firebase.storage();
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
            lazyBind(storage, img);
        }));
    });
};

const bindComponentEvents = () => {
    selector.rightarrow().addEventListener('click', carousel.moveRight);
    selector.leftarrow().addEventListener('click', carousel.moveLeft);
    selector.searchbar().addEventListener('keyup', search.searchForInput);
    selector.lazyimg().forEach((img => {
        lazyBind(storage, img);
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
