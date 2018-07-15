import {
    selector
} from '../../common/common.js';



export const lazyBind = (ele) => {

    const bufferheight = window.innerHeight;

    const winstart = window.scrollY; //+ bufferheight;
    const winend = winstart + bufferheight;
    const elestart = ele.offsetTop;
    const eleend = ele.offsetHeight > 0 ? ele.offsetTop + ele.offsetHeight : ele.offsetTop + 150;
    var rect = ele.getBoundingClientRect();

    if ((ele.attributes['img-loaded'].value === 'false') && ((rect.top < window.innerHeight - 100 && rect.top > 0) || (rect.bottom > 0 && rect.bottom < window.innerHeight + 100))) {
        setTimeout(function () {
            ele.attributes['src'].value = ele.attributes['lazy-img-src'].value;
        }, 200);

    }

};
