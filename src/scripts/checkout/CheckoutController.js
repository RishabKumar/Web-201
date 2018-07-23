import {
    selector
} from './../common/common';
import {
    accordian
} from './components/accordian';
import {
    order
} from './components/ordersummary';

export class CheckoutController {

    constructor() {

    }

    bindWindowEvents() {
        
    }

    bindComponentEvents() {
        selector.proceed().forEach((t) => t.addEventListener('click', accordian.openNxtAccordian));
        selector.accordianbtn().forEach((t) => t.addEventListener('click', accordian.openAccordian));
       
    }

    init() {
        
        this.bindWindowEvents();
        this.bindComponentEvents();
        order.populateOrderSummary();
    }

}
