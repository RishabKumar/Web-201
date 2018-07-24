export const lazyBind = (ele) => {
    const rect = ele.getBoundingClientRect();

    if ((ele.attributes['img-loaded'].value === 'false') && ((rect.top < window.innerHeight - 100 && rect.top > 0) || (rect.bottom > 0 && rect.bottom < window.innerHeight + 100))) {
        setTimeout(function () {
            ele.attributes['src'].value = ele.attributes['lazy-img-src'].value;
        }, 200);
    }
};
