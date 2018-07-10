import {
    selector
} from './common';

const highlightOnScroll = () => {

}

window.addEventListener('scroll', (e) => {
    selector.category().forEach((ele) => {

        const bufferheight = window.innerHeight * 0.30;
        const winloc = (bufferheight) + window.scrollY;

        if (Math.floor(winloc) >= Math.floor(ele.offsetTop - bufferheight) && Math.floor(winloc) <= Math.floor(ele.offsetTop + ele.offsetHeight - bufferheight)) {
          
            selector.categories().forEach((x) => {
                if (x.id == 'cat-' + ele.id) {
                    x.style = "background-color:#f7a91980;font-weight: 600;";
                } else {
                    x.style = "background-color:#fff";
                }
            });

        } else {
            ele.style = "background-color:#fff";

        }

    });

});

