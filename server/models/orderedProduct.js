var thinky = require("../thinky");
let type = thinky.type;

let OrderedProduct = thinky.createModel("OrderedProduct", {
    id: type.string(),
    productId: type.string(),
    orderId: type.string(),
    priceId: type.string(),
    amount: type.number(),
    specialWish: type.string()

});

module.exports = OrderedProduct;

var Product = require("./product");
OrderedProduct.belongsTo(Product, "products", "productId", "id");
var Price = require("./price");
OrderedProduct.belongsTo(Price, "price","priceId", "id");
var Order = require("./order");
OrderedProduct.belongsTo(Order, "order", "orderId", "id");