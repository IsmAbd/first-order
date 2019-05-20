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
var User = require("./user");
Order.belongsTo(User, "users", "id", "userID");
//restaurant hat viele Order
var Restaurant = require("./restaurant");
Order.belongsTo(Restaurant, "restaurants", "id", "restaurantID");
//order hat viele ordererdproducts

