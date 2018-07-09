import {selector} from  './common';

selector.rightarrow().addEventListener('click', (e) => {
    selector.slider().scrollBy({
        left: window.innerWidth * 0.85,
        behavior: 'smooth'
    });
    if (selector.slider().scrollWidth < (selector.slider().scrollLeft + (window.innerWidth * 0.85))) {
        selector.slider().scrollBy({
        left: selector.slider().scrollWidth * -1,
        behavior: 'smooth'
    });
    }
});

selector.leftarrow().addEventListener('click', (e) => {
    selector.slider().scrollBy({
        left: window.innerWidth * 0.85 * -1,
        behavior: 'smooth'
    });
});
