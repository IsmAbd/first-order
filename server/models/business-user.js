import thinky from "../thinky";

let type = thinky.type;

let BusinessUser = thinky.createModel("BusinessUser", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string(),
  password: type.string(),
  payment_method_id: type.string()
});

module.exports = BusinessUser;

let Restaurant = require("./restaurant");

BusinessUser.hasMany(Restaurant, "restaurants", "id", "businessuserId");
