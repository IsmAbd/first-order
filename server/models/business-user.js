var thinky = require("../thinky");

let type = thinky.type;

let BusinessUser = thinky.createModel("BusinessUser", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string(),
  password: type.string(),
  payment_method_id: type.string() // maybe wants to use account as a customer as well...
});

module.exports = BusinessUser;

var Restaurant = require("./restaurant");
BusinessUser.hasMany(Restaurant, "restaurants", "id", "businessuserId");
