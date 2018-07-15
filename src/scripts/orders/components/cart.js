import {
    Common
} from '../../common/common';

const addToCart = (size, qty, itemid) => {
    const item = {
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
        const validItems = Common.fetchItems('menu-items.json');
        itemArr.filter((item) => {
            return validItems().find((t) => item.itemid === t.id);
        });
        return itemArr.map((item) => {
            if (item !== null || item !== undefined) {
                return new CartItem(validItem, item.size, item.qty);
            }
        });
    }
}

export const Cart = {
    loadFromCart: loadFromCart,
    addToCart: addToCart
}
