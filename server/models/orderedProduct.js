const thinky = require("../thinky");
let type = thinky.type;

let OrderedProduct = thinky.createModel("OrderedProduct", {
    id: type.string(),
    productId: type.string(),
    orderId: type.string(),
    priceId: type.string(), amount: type.number(),
    specialWish: type.string()
});

module.exports = OrderedProduct;

const Product = require("./product");
const Price = require("./price");
const Order = require("./order");

OrderedProduct.belongsTo(Product, "products", "productId", "id");
OrderedProduct.belongsTo(Price, "price", "priceId", "id");
OrderedProduct.belongsTo(Order, "order", "orderId", "id");
