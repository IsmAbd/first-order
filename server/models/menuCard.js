const thinky = require("../thinky");
let type = thinky.type;

let MenuCard = thinky.createModel("MenuCard", {
    id: type.string(),
    restaurantId: type.string(),
    productId: type.string()
});

module.exports = MenuCard;

const Restaurant = require("./restaurant");
const Product = require("./product");

MenuCard.hasOne(Restaurant, "restaurant", "restaurantId", "id");