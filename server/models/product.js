//fertig
const thinky = require("../thinky");
let type = thinky.type;

let Product = thinky.createModel("Product", {
  id: type.string(),
  name: type.string(),
  description: type.string(),
  category_id: type.string(),
  type: type.string(),
  image_path: type.string(),
  orderedProduct_id: type.string()
});

module.exports = Product;

const Category = require("./category");
const Price = require("./price");
const OrderedProduct = require("./orderedProduct");

Product.belongsTo(Category, "category", "category_id", "id");
Product.hasMany(Price, "prices", "id", "product_id");
//Product.belongsTo(OrderedProduct, "orderedproducts", "orderedProduct_id", "id");  nicht sicher
  