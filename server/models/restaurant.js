var thinky = require("../thinky");
let type = thinky.type;

let Restaurant = thinky.createModel("Restaurant", {
  id: type.string(), // Nicht sicher, ob wir das brauchen
  name: type.string(),
  adress: type.string(),
  payment_method_id: type.string(),
  businessuserId: type.string(),
  tables: type.string() //ARRAY
});

module.exports = Restaurant;

var BusinessUser = require("./business-user");
Restaurant.belongsTo(BusinessUser, "businessuser", "businessuserId", "id");
