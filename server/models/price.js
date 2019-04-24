var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let Price = thinky.createModel("Price", {
  id: type.string(),
  price: type.string(),
  product: type.product,
  fromYear: type.string(),
  toYear: type.string(),
  fromMonth: type.string(),
  toMonth: type.string(),
  fromWeek: type.string(),
  toWeek: type.string(),
  fromDay: type.string(),
  toDay: type.string(),
  fromH_min: type.string(),
  toH_min: type.string(),


});

exports.addPrice = function(price) {
  var newPrice = new Price(price);

  var temp = newPrice.save().then(result => {
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
