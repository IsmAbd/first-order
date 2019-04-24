var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let BusinessUser = thinky.createModel("BusinessUser", {
  id: type.string(),
  fname: type.string(),
  lname: type.string(),
  email: type.string(),
  pw: type.string(),
  payment_method_id: type.string() // maybe wants to use account as a customer as well...
});

exports.addBusinessUser = function(businessUser) {
  var newBusinessUser = new BusinessUser(businessUser);

  var temp = newBusinessUser.save().then(result => {
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
