import {
    selector
} from '../../common/common.js';


export const header = {
    reduceHeaderOnScroll: () => {

        if (Math.floor(window.scrollY) > 10) {
            selector.header().className = 'header-height-s';
        } else if (selector.header().className === 'header-height-s') {
            selector.header().className = 'header-height-l';
        }
    }
};