import {
    home
} from '../home/index.js';

import {
    selector
} from '../common/common.js';

/*/
class EventBinder {

    constructor(page) {
        this.page = page;
    }

    bindEvents() {
        if (this.page === 'home') {
            window.addEventListener('scroll', home.category.selectCategory);
            window.addEventListener('scroll', home.header.reduceHeaderOnScroll);

            selector.rightarrow().addEventListener('click', home.carousel.moveRight);
            selector.leftarrow().addEventListener('click', home.carousel.moveLeft);

            selector.lazyimg().forEach((img => {
                home.lazyBind(img);
            }));
            window.addEventListener('scroll', function () {
                selector.lazyimg().forEach((img => {
                    home.lazyBind(img);
                }));
            });

        }
    }

}

class PopulateData {
    constructor(page) {

    }

    populateData() {
        selector.menuitems().innerHTML = '';
        selector.menuitems().insertAdjacentHTML("afterbegin", home.menuItems());
    }
}

/*/
export class UIController {
    constructor(page) {
        this.page = page;
    }

    init() {
        if (this.page === 'home') {
            home.init();
        }
    }



}