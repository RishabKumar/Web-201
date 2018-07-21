import {
    cartitems
} from './components/cartitems';
import {
    subtotal
} from './components/subtotal';
import {
    selector
} from './../common/common';

export class CartController {

    constructor() {

    }

    bindWindowEvents() {
        window.addEventListener('load', subtotal.populateCartItems);
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

    init() {
        cartitems.populateCartItems();
        this.bindWindowEvents();
        this.bindComponentEvents();
    }

}
