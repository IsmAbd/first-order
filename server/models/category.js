import thinky from "../thinky";

let type = thinky.type;

let Category = thinky.createModel("Category", {
  id: type.string(),
  name: type.string()
});



const Product = require("./product");

Category.hasMany(Product, "products", "id", "category_id");

module.exports = Category;
