const thinky = require("../thinky");
const type = thinky.type;

let MenuCard = thinky.createModel("MenuCard", {
    id: type.string(),
    restaurantId: type.string(),
    productId: type.string()


});
module.exports = MenuCard;
const Restaurant = require("./restaurant");
MenuCard.hasOne(Restaurant, "restaurant", "restaurantId", "id");
const Product = require("./product");
//stimmt die relation im Datenmodell?