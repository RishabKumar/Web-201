import {
    selector
} from '../../common/common.js';



export const lazyBind = (ele) => {

    const bufferheight = window.innerHeight;

    const winstart = window.scrollY; //+ bufferheight;
    const winend = winstart + bufferheight;
    const elestart = ele.offsetTop;
    const eleend = ele.offsetHeight > 0 ? ele.offsetTop + ele.offsetHeight : ele.offsetTop + 150;
    console.log("winstart:" + winstart);
    console.log("ele start:" + elestart);
    console.log("winend:" + winend);
    console.log("ele end:" + eleend);

    var rect = ele.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    if ((ele.attributes['img-loaded'].value === 'false') && ((rect.top < window.innerHeight && rect.top > 0) || (rect.bottom > 0 && rect.bottom < window.innerHeight))) {
        setTimeout(function () {
            ele.attributes['src'].value = ele.attributes['lazy-img-src'].value;
        }, 700);

    }

};
