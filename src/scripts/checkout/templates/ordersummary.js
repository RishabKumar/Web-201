export const orderSummaryTemplate = (cartitems, subtotal, tax, total) => {

    return          `${cartitems.map((cartitem) => { return `<span>${cartitem.item.name} (${cartitem.size}) x ${cartitem.qty}</span><span>₹${cartitem.price * cartitem.qty}</span>`}).join('')}<span>SUBTOTAL</span><span>₹${subtotal}</span>
                    <span>TAX (5%)</span><span>₹${tax}</span>
                    <span>TOTAL</span><span>₹${total}</span>
                    <span></span><span><a href='#'>Proceed</a></span>`;

}
