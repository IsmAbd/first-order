import thinky from "../thinky";

let type = thinky.type;
let PaymentMethod = require("./paymentMethod");
let Restaurant = require("./restaurant");




let BusinessUser = thinky.createModel("BusinessUser", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string(),
  password: type.string(),
  payment_method_id: type.string()
});

module.exports = BusinessUser;


//BusinessUser.hasMany(Restaurant, "restaurants", "id", "businessuser_id");
BusinessUser.belongsTo(PaymentMethod, "paymentMethods", "payment_method_id", "id");   


