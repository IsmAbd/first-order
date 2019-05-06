var config = require("../config");
var thinky = require("thinky")(config);
var r = thinky.r;
var Query = thinky.Query;

let type = thinky.type;

let Restaurant = thinky.createModel("Restaurant", {
  id: type.string(), // Nicht sicher, ob wir das brauchen
  name: type.string(),
  adress: type.string(),
  payment_method_id: type.string(),
  tables: type.string() //ARRAY
});

export default Restaurant;
