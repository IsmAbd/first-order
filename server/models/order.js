var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let Order  = thinky.createModel("Order", {
    id: type.string(),
    user_id: type.string(),
    restaurant_id: type.string(),
    table_number: type.string(),
    order_status_id: type.string(),
    timestamp: type.string(),
    paid: type.boolean()




});
module.exports = Order;


//hat einen OrderStatus

//user hat viele Order
const User = require("./user");
Order.belongsTo(User, "users", "id", "user_id");
//restaurant hat viele Order
const Restaurant = require("./restaurant");
Order.belongsTo(Restaurant, "restaurant", "restaurant_id", "id");//nicht sicher, ob das so richtig ist
//order hat viele ordererdproducts
const OrderedProduct = require("./orderedProduct");
order.hasMany(OrderedProduct, "products", "id", "orderId");


