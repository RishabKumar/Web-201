import {
    cartitems
} from './components/cartitems';
import {
    subtotal
} from './components/subtotal';
import {
    selector
} from './../common/common';
import {
    lazyImgBinder
} from './../common/lazy-load';

export class CartController {

    constructor() {}

    bindWindowEvents() {
        window.addEventListener('load', subtotal.populateCartItems);
        window.addEventListener('load', () => {
            lazyImgBinder(this.storage);
        });
        window.addEventListener('scroll', () => {
            lazyImgBinder(this.storage);
        });
    }

    bindComponentEvents() {

        selector.reduceQty().forEach((t) => {
            t.addEventListener('click', cartitems.reduceQty);
        });
        selector.increaseQty().forEach((t) => {
            t.addEventListener('click', cartitems.increaseQty);
        });

        selector.itemSize().forEach((size) => {
            size.addEventListener('click', cartitems.selectSize);
        });
        selector.removeItem().forEach((btn) => {
            btn.addEventListener('click', cartitems.removeItem);
        });
    }

    init(firebaseStorage) {
        this.storage = firebaseStorage;
        cartitems.populateCartItems();
        this.bindWindowEvents();
        this.bindComponentEvents();
    }

}
