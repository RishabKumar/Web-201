export const cartItemTemplate = (cartItem) => {
    return ` <li>
                    <div class='cart-item' data-cart-id='${cartItem.id}' data-item-id='${cartItem.item.id}'>
                        <div class='cart-item-img'>
                            <div>
                                <img src='${cartItem.item.imgsrc}'>
                            </div>
                        </div>
                        <div class='cart-item-desc'>
                            <div>
                                <h3>${cartItem.item.name}</h3>
                            </div>
                            <div class='size-container'>
                                <span class="label">
                             
                                ${getItemAvailableSizes(cartItem)}
                             
                        </span>
                            </div>
                            <div class='item-price'>
                                 <span>₹${cartItem.price}</span>  
                            </div>

                        </div>
                        <div class='item-qty'>
                            <h4>
                                <span>
                                    <a class='reduce-qty' href='#'>-</a>
                                    <input type='text' class='item-qty' readonly value='${cartItem.qty}'>
                                    <a class='increase-qty' href='#'>+</a>
                                </span>
                            </h4>
                        </div>
                        <div class='remove-item'>
                            <button>REMOVE</button>
                        </div>
                    </div>
                </li>`;
};

const getItemAvailableSizes = (cartitem) => {
    let final = '';
    const sizeid = cartitem.id;
 //   debugger;
    if (cartitem.item.price.h !== undefined) {
        final += `H<input type='radio' name='size-${sizeid}' value='h' class='halfSize' ${cartitem.size === 'h'?'checked=checked':''}>`;
    }
    if (cartitem.item.price.f !== undefined) {
        final += `F<input type='radio' name='size-${sizeid}' value='f' class='fullSize' ${cartitem.size === 'f'?'checked=checked':''}>`;
    }
    return final;
};
