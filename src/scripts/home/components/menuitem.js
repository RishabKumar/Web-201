import {MenuItem} from '../models/MenuItem';
import {menuItemTemplate} from '../templates/menu-item';

var fetchMenuItems = function () {
    var tmp = [];
    $.ajax({
        url: '/static/menu-items.json',
        datatype: "json",
        async: false,
        success: function (items) {
            items = Object.values(items);
            for (let i = 0; i < items.length; i++) {
                tmp.push(new MenuItem(items[i].id, items[i].name, items[i].price, items[i].description, items[i].imgsrc));
            }
        }
    });
    return tmp;
};

export const menuItems = () => {
    
    let finalMenuTtem = '';
    fetchMenuItems().forEach((item) =>{
        finalMenuTtem += menuItemTemplate(item);
    });
    return finalMenuTtem;
};