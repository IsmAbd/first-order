var thinky = require("../thinky");
let type = thinky.type;

let MenuCard = thinky.createModel("MenuCard", {
    id: type.string(),
    restaurantId: type.string(),
    productId: type.string()


});
module.exports = MenuCard;
var Restaurant = require("./restaurant");
MenuCard.hasOne(Restaurant, "restaurant", "restaurantId", "id");
var Product = require("./product");
//stimmt die relation im Datenmodell?