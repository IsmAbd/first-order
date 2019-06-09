const config = require("../config");
const thinky = require("../thinky");
//const r = thinky.r;
const type = thinky.type;
let BusinessUser = require("./business-user");

let PaymentMethod = thinky.createModel("PaymentMethod", {
  id: type.string(),
  name: type.string()
});

module.exports = PaymentMethod;

//PaymentMethod.hasOne(BusinessUser, "businessUser", "id", "payment_method_id");
