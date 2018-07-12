class MenuItem {

    constructor(id, name, price, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }

    


}



export var fetchMenuItems = function () {
    var tmp = [];
    $.ajax({
        url: '/static/menu-items.json',
        datatype: "json",
        async: false,
        success: function (items) {
            items = Object.values(items);
            for (let i = 0; i < items.length; i++) {
                tmp.push(new MenuItem(items[i].id, items[i].name, items[i].price, items[i].description));
            }
        }
    });
    return tmp;
};

              

var t = fetchMenuItems();
console.log(t);