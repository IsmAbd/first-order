var thinky = require("../thinky");
let type = thinky.type;

let OrderedProduct = thinky.createModel("OrderedProduct", {
    id: type.string(),
    productId: type.string(),
    orderId: type.string(),
    priceId: type.string(),
    amount: type.number(),
    wish: type.string()

});

module.exports = OrderedProduct;

var Product = require("./product");//hat ein Product
OrderedProduct.hasOne(Product, "product", "productId", "id");
var Price = require("./price");//hat einen Preis
OrderedProduct.hasOne(Price, "price","priceId", "id");
var Order = require("./order");
OrderedProduct.belongsTo(Order, "order", "orderId", "id");//ordered products belong to an order