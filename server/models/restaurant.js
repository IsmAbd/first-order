const thinky = require("../thinky");
let type = thinky.type;

let Restaurant = thinky.createModel("Restaurant", {
    id: type.string(),
    name: type.string(),
    address: type.string(),
    payment_method_id: type.string(),
    businessuserId: type.string(),
    tables: type.string()
});

module.exports = Restaurant;

let BusinessUser = require("./business-user");

Restaurant.belongsTo(BusinessUser, "businessuser", "businessuserId", "id");
