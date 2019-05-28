import thinky from "../thinky";

let type = thinky.type;

let Category = thinky.createModel("Category", {
  id: type.string(),
  name: type.string()
});

module.exports = Category;

const Product = require("./product");

Category.hasMany(Product, "products", "id", "categoryId");
