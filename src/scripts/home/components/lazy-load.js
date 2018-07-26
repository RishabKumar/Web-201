export const lazyBind = (firebasestorage,ele) => {
    const rect = ele.getBoundingClientRect();

    if ((ele.attributes['img-loaded'].value === 'false') && ((rect.top < window.innerHeight - 100 && rect.top > 0) || (rect.bottom > 0 && rect.bottom < window.innerHeight + 100))) {
        const imgname = ele.attributes['lazy-img-src'].value;
        firebasestorage.ref().child('menuitems/'+imgname).getDownloadURL().then(function (url) {
            ele.attributes['src'].value = url;
        }).catch(function () {

        });


    }
};
