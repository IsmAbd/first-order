var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let Order  = thinky.createModel("Order", {
    id: type.string(),
    user_id: type.string(),
    restaurant_id: type.string(),
    table_number: type.int(),
    order_status_id: type.string(),
    time: type.string(),
    paid: type.boolean()




});
module.exports = Order;


//hat einen OrderStatus

//user hat  Order
const User = require("./user");
Order.belongsTo(User, "user", "id", "user_id");
//restaurant hat  Order
const Restaurant = require("./restaurant");
Order.belongsTo(Restaurant, "restaurant", "restaurant_id", "id");//nicht sicher, ob das so richtig ist
//order hat viele ordererdproducts
const OrderedProduct = require("./orderedProduct");
order.hasMany(OrderedProduct, "products", "id", "orderId");
//fertig


