import {
    Common
} from '../../common/common';
import {
    CartItem
} from '../models/CartItem';

const addToCart = (size, qty, itemid) => {
    const item = {
        "id": Math.random(),
        "size": size,
        "qty": qty,
        "itemid": itemid
    }
    let itemstr = localStorage.getItem('cartItems');
    let itemArr;
    if (itemstr === null) {
        itemArr = [];
        itemArr.push(item);
    } else {
        itemArr = JSON.parse(itemstr);
        itemArr.push(item);
    }
    itemstr = JSON.stringify(itemArr);
    localStorage.setItem('cartItems', itemstr);
    Common.setCartCount();
}

const loadFromCart = () => {
    let itemstr = localStorage.getItem('cartItems');
    let itemArr;
    if (itemstr === null) {
        return null;
    } else {
        itemArr = JSON.parse(itemstr);
        let validItems = Common.fetchItems('menu-items.json');
        return itemArr.map((cartitem) => {
      //      debugger;
            let validItem = validItems.find((t) => cartitem.itemid === t.id);
            if (validItem !== null && validItem !== undefined) {
                return new CartItem(validItem, cartitem.id, cartitem.size, cartitem.qty);
            }
        });
    }
}

export const Cart = {
    loadFromCart: loadFromCart,
    addToCart: addToCart
}
