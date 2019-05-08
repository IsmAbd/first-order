var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let User = thinky.createModel("User", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string().required(),
  password: type.string(),
  payment_method_id: type.string()
});

export default User;