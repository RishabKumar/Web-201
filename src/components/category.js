import {
    selector
} from './common';

const highlightOnScroll = () => {

}

window.addEventListener('scroll', (e) => {
    selector.category().forEach((ele) => {
        //    console.log(ele.offsetTop);
        //     console.log(Math.floor(window.scrollY));

        const bufferheight = window.innerHeight * 0.30;
        const winloc = (bufferheight) + window.scrollY;

        if (Math.floor(winloc) >= Math.floor(ele.offsetTop - bufferheight) && Math.floor(winloc) <= Math.floor(ele.offsetTop + ele.offsetHeight - bufferheight)) {
            //       console.log(ele);
            //  ele.style = "background-color:yellow";
            selector.categories().forEach((x) => {
                if (x.id == 'cat-' + ele.id) {
                    x.style = "background-color:#f7a91980";
                } else {
                    x.style = "background-color:#fff";
                }
            });

        } else {
            ele.style = "background-color:#fff";

        }

    });

});

