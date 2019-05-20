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
OrderedProduct.hasOne(Product, "products", "productId", "Id");