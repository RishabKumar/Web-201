import {
    selector
} from './common';


window.addEventListener('scroll', () => {

    if (Math.floor(window.scrollY) > 10) {
        selector.header().className = 'header-height-s';
    } else if (selector.header().className === 'header-height-s') {
        selector.header().className = 'header-height-l';
    }
})
