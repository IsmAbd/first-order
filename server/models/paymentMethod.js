const config = require("../config");
const thinky = require("../thinky");
//const r = thinky.r;
const type = thinky.type;


let PaymentMethod = thinky.createModel("PaymentMethod", {
  id: type.string(),
  name: type.string(),
  user_id: type.string()
});

module.exports = PaymentMethod;

const BusinessUser = require("./business-user");
const User = require("./user");

PaymentMethod.belongsTo(User, "user", "user_id", "id");
PaymentMethod.hasOne(BusinessUser, "businessUser", "id", "payment_method_id");
