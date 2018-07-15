export class CartItem{
    constructor(item, size, qty)
    {
        this.item = item;
        this.qty = qty;
        this.size = size;
        this.price = item.price[size];
    }
}