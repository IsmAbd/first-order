const thinky = require("../thinky");
let type = thinky.type;
let BusinessUser = require("./business-user");

let Restaurant = thinky.createModel("Restaurant", {
    id: type.string(),
    name: type.string(),
    address: type.string(),
    payment_method_id: type.string(),
    businessuserId: type.string(),
    tables: type.string()
});


Restaurant.belongsTo(BusinessUser, "businessuser", "businessuser_id", "id");
module.exports = Restaurant;
