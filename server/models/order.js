//fertig
const config = require("../config");
const thinky = require("thinky")(config);


const r = thinky.r;

let type = thinky.type;

let Order = thinky.createModel("Order", {
  id: type.string(),
  //restaurant_id: type.string(),
  table_number: type.number(),
  order_status_id: type.string(),
  time: type.string(),
  paid: type.boolean()
});
module.exports = Order;

const User = require("./user");
const Restaurant = require("./restaurant");
const OrderedProduct = require("./orderedProduct");

Order.hasOne(User, "users", "id", "user_id");
Order.hasOne(Restaurant, "restaurant", "id", "order_id"); //nicht sicher, ob das so richtig ist
//Order.hasOne(Restaurant, "restaurant", "id", )
Order.hasMany(OrderedProduct, "products", "id", "orderId");

