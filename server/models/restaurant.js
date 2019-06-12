import thinky from "../thinky";

let type = thinky.type;

let Restaurant = thinky.createModel("Restaurant", {
  id: type.string(),
  name: type.string(),
  address: type.string(),
  payment_method_id: type.string(),
  businessuser_id: type.string(),
  order_id: type.string(),
  tables: type.string()
});
module.exports = Restaurant;

const BusinessUser = require("./business-user");
const Category = require("./category");
const Order = require("./order");

Restaurant.hasMany(Category, "categories", "id", "restaurant_id");
Restaurant.belongsTo(BusinessUser, "businessUser", "businessuser_id", "id");
//Restaurant.belongsTo(Order, "order", "order_id", "id");
Restaurant.hasMany(Order, "orders", "id", "restaurant_id");
