var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;

let type = thinky.type;

let Product = thinky.createModel("Product", {
  id: type.string(),
  name: type.string(),
  description: type.string(),
  category: type.string(),
  type: type.string(),
  image_path: type.string()
});

exports.addProduct = function(product) {
  var newProduct = new Product(product);

  var temp = newProduct.save().then(result => {
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
