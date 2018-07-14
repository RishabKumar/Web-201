import {
    MenuItem
} from '../models/MenuItem';
import {
    menuItemTemplate
} from '../templates/menu-item';

export const menuItemSectionTemplate = (cat, menuitems) =>{
    return `<section id='${escape(cat.name)}' class='category'>
                        <div id='${escape(cat.name)}-placeholder' class='category-placeholder'></div>
                        <h2>
                            ${cat.name}
                        </h2>
                        <section class='menu-items'>
                          ${transformMenuItems(menuitems)}
                        </section>
                        <hr>
                    </section>`;
}

const transformMenuItems = (menuitems) => {
    let final = '';
    menuitems.forEach((item) => final+=menuItemTemplate(item));
    return final;
}