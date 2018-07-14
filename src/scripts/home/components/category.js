import {
    selector
} from '../../common/common.js';
import {
    Category
} from '../models/Category';
import {
    categoryTemplate
} from '../templates/category';

const selectCategory = (e) => {
    selector.category().forEach((ele) => {
        const bufferheight = window.innerHeight * 0.08;
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

};

const fetchCategories = () => {
    var tmp = [];
    $.ajax({
        url: '/static/categories.json',
        datatype: "json",
        async: false,
        success: function (items) {
            items = Object.values(items);
            for (let i = 0; i < items.length; i++) {
                tmp.push(new Category(items[i].id, items[i].name, items[i].imgsrc));
            }
        }
    });
    return tmp;
}

export const allCategoriesDom = () => {
    
    let _allcategories = '';
    fetchCategories().forEach((cat) =>{
        _allcategories += categoryTemplate(cat);
    });
    return _allcategories;
};

const populateData = () => {
    selector.categories_ul().innerHTML = '';
    selector.categories_ul().insertAdjacentHTML("afterbegin", allCategoriesDom());
}

export const category = {
    selectCategory: selectCategory,
    populateData: populateData,
    allCategoriesDom : allCategoriesDom,
    fetchCategories : fetchCategories
}
