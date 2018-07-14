import {
    MenuItem
} from '../models/MenuItem';
import {
    menuItemTemplate
} from '../templates/menu-item';
import {
    menuItemSectionTemplate
} from '../templates/menu-item-section';
import {
    selector
} from '../../common/common';
import {
    category
} from './category';

const fetchMenuItems = function () {
    var tmp = [];
    $.ajax({
        url: '/static/menu-items.json',
        datatype: "json",
        async: false,
        success: function (items) {
            items = Object.values(items);
            for (let i = 0; i < items.length; i++) {
                tmp.push(new MenuItem(items[i].id, items[i].name, items[i].price, items[i].description, items[i].imgsrc, items[i].categoryid, items[i].tags));
            }
        }
    });
    return tmp;
};

const populateData = () => {
    selector.menuitemcontainer().insertAdjacentHTML('beforeend', menuItemSectionDom());
}

const populateSearchData = (item) => {
    selector.searchresultsection().insertAdjacentHTML('beforeend', menuItemTemplate(item));
}

const menuItemSectionDom = () => {
    const c = category.fetchCategories();
    const cat_menuitem_map = new Map();
    const menuitems = fetchMenuItems();
    c.forEach((cat) => {
        const item_arr = menuitems.filter(item => item.categoryid.includes(cat.id));
        cat_menuitem_map.set(cat, item_arr);
    });
    let final = '';
    cat_menuitem_map.forEach((value, key) => {
        final += menuItemSectionTemplate(key, value);
    });
    return final;
};

export const menuItems = {
    populateData: populateData,
    menuItemSectionDom: menuItemSectionDom,
    populateSearchData: populateSearchData
}
