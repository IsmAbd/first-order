//fertig
const thinky = require("../thinky");
let type = thinky.type;

let OrderedProduct = thinky.createModel("OrderedProduct", {
    id: type.string(),
    //order_id: type.string(),
    //price_id: type.string(), amount: type.number(),
    specialWish: type.string()
});

module.exports = OrderedProduct;

const Product = require("./product");
const Price = require("./price");
const Order = require("./order");

OrderedProduct.hasOne(Product, "products", "id", "orderedProduct_id");
OrderedProduct.hasOne(Price, "price", "id", "orderedProduct_id");
OrderedProduct.belongsTo(Order, "order", "order_id", "id");
