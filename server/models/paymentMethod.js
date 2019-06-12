//fertig
const config = require("../config");
const thinky = require("../thinky");
//const r = thinky.r;
const type = thinky.type;


let PaymentMethod = thinky.createModel("PaymentMethod", {
  id: type.string(),
  name: type.string(),
  user_id: type.string(),
  businessUser_id: type.string(),
  restaurant_id: type.string()
});

module.exports = PaymentMethod;

const BusinessUser = require("./business-user");
const User = require("./user");
const Restaurant = require("./restaurant");

PaymentMethod.belongsTo(User, "user", "user_id", "id");
PaymentMethod.belongsTo(BusinessUser, "businessUser", "businessUser_id", "id");
PaymentMethod.belongsTo(Restaurant, "restaurant", "restaurant_id", "id");
