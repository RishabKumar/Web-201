export class CartItem{
    constructor(item, id, size, qty)
    {
        this.id = id;
        this.item = item;
        this.qty = qty;
        this.size = size;
        this.price = item.price[size];
    }
}