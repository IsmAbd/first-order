var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let BusinessUser = thinky.createModel("BusinessUser", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string(),
  password: type.string(),
  payment_method_id: type.string() // maybe wants to use account as a customer as well...
});

export default BusinessUser;
