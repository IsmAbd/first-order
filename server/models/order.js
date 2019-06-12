//fertig
const config = require("../config");
const thinky = require("thinky")(config);


const r = thinky.r;

let type = thinky.type;

let Order = thinky.createModel("Order", {
  id: type.string(),
  table_number: type.number(),
  order_status_id: type.string(),
  time: type.string(),
  paid: type.boolean(),
  restaurant_id: type.string(),
  user_id: type.string()
});
module.exports = Order;

const User = require("./user");
const Restaurant = require("./restaurant");
const OrderedProduct = require("./orderedProduct");

Order.belongsTo(User, "user", "id", "user_id");
Order.belongsTo(Restaurant, "restaurant", "restaurant_id", "id"); //nicht sicher, ob das so richtig ist
//Order.hasOne(Restaurant, "restaurant", "id", )
Order.hasMany(OrderedProduct, "products", "id", "orderId");

