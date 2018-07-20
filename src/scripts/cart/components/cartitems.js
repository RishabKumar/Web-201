import {
    selector
} from '../../common/common';
import {
    Common
} from '../../common/common';
import {
    cartItemTemplate
} from '../templates/cart-item';
import {
    Cart
} from './cart';

const populateCartItems = () => {
    selector.cartcounts().innerHTML = '';
    selector.cartcounts().insertAdjacentHTML('beforeend', cartItemsDom());
};

const cartItemsDom = () => {
     
    const cartitems = Cart.loadFromCart();
    
    let final = '';
    cartitems.forEach((item) => {
        final += cartItemTemplate(item);
    });
    return final;
}

const reduceQty = (e) => {
    e.preventDefault();
    let input = e.target.parentElement.querySelector('input.item-qty');
    if (parseInt(input.value) > 0)
        input.value = parseInt(input.value) - 1;
}

const increaseQty = (e) => {
    e.preventDefault();
    let input = e.target.parentElement.querySelector('input.item-qty');
    if (parseInt(input.value) < 5)
        input.value = parseInt(input.value) + 1;
}

const selectSize = (e) => {
    const items = Common.fetchItems('menu-items.json');
    const parent = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    const id = parent.dataset.itemId;
    const price = items.find((t) => t.id == id);
    if (e.target.className === 'halfSize') {
        let h = parent.querySelector('.item-price span').innerText = price.price.h;

    } else if (e.target.className === 'fullSize') {
        let h = parent.querySelector('.item-price span').innerText = price.price.f;
    }
}

export const cartitems = {
    populateCartItems: populateCartItems,
    cartItemsDom: cartItemsDom,
    reduceQty: reduceQty,
    increaseQty: increaseQty,
    selectSize: selectSize
}
