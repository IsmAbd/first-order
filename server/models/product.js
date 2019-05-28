const thinky = require("../thinky");
let type = thinky.type;

let Product = thinky.createModel("Product", {
    id: type.string(),
    name: type.string(),
    description: type.string(),
    category_id: type.string(),
    price_id: type.string(),
    type: type.string(),
    image_path: type.string()
});

module.exports = Product;

let Category = require("./category");

//Product.belongsTo(Category, "category", "category_id", "id");
