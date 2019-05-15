var thinky = require("../thinky");
let type = thinky.type;

let Product = thinky.createModel("Product", {
  id: type.string(),
  name: type.string(),
  description: type.string(),
  category: type.string(),
  type: type.string(),
  image_path: type.string()
});

module.exports = Product;