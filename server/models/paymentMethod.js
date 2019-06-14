//fertig
const thinky = require("../thinky");

const type = thinky.type;


let PaymentMethod = thinky.createModel("PaymentMethod", {
  id: type.string(),
  name: type.string(),
  user_id: type.string(),
  restaurant_id: type.string()
});

module.exports = PaymentMethod;


const User = require("./user");
const Restaurant = require("./restaurant");

PaymentMethod.belongsTo(User, "user", "user_id", "id");
PaymentMethod.belongsTo(Restaurant, "restaurant", "restaurant_id", "id");
