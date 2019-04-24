var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let Restaurant = thinky.createModel("Restaurant", {
  id: type.string(),
  name: type.string(),
  adress: type.string(),
  payment_method_id: type.string(),
  tables: type.string() //ARRAY
});

exports.addRestaurant = function(restaurant) {
  var newRestaurant = new Restaurant(restaurant);

  var temp = newRestaurant.save().then(result => {
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
