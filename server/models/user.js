var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let User = thinky.createModel("User", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string(),
  pw: type.string(),
  payment_method_id: type.string(),
});

exports.addUser = function(user) {
  var newUser = new User(user);

  var temp = newUser.save().then(result => {
    return result;
  });
  return temp;
};

function handleError(res) {
  return function(error) {
    console.log(error.message);
    return res.send(500, { error: error.message });
  };
}
