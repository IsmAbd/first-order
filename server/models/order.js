const config = require("../config");
const thinky = require("thinky")(config);
const User = require("./user");
const Restaurant = require("./restaurant");
const OrderedProduct = require("./orderedProduct");

const r = thinky.r;

let type = thinky.type;

let Order = thinky.createModel("Order", {
    id: type.string(),
    user_id: type.string(),
    restaurant_id: type.string(),
    table_number: type.int(),
    order_status_id: type.string(),
    time: type.string(),
    paid: type.boolean()
});

Order.belongsTo(User, "users", "id", "user_id");
Order.belongsTo(Restaurant, "restaurant", "restaurant_id", "id");//nicht sicher, ob das so richtig ist
order.hasMany(OrderedProduct, "products", "id", "orderId");
//fertig

module.exports = Order;
