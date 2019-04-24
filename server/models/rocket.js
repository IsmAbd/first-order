var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let Rocket = thinky.createModel("Rocket", {
  name: type.string(),
  date: type.string()
});

exports.addRocket = function(rocket) {
  var newRocket = new Rocket(rocket);

  var temp = newRocket.save().then(result => {
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
