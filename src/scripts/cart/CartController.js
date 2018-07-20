import {
    cartitems
} from './components/cartitems';
import {
    selector
} from './../common/common';

export class CartController {

    constructor() {

    }

    bindWindowEvents() {

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
    }

    init() {
        cartitems.populateCartItems();
        this.bindWindowEvents();
        this.bindComponentEvents();
    }

}
