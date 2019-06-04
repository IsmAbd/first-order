const config = require("../config");
const thinky = require("thinky")(config);
const r = thinky.r;
const Product = require("./product");
const OrderedProduct = require("./orderedProduct");

let type = thinky.type;

let Price = thinky.createModel("Price", {
  id: type.string(),
  price: type.string(),
  product: type.product, //Product oder ProductID?
  fromYear: type.string(),
  toYear: type.string(),
  fromMonth: type.string(),
  toMonth: type.string(),
  fromWeek: type.string(),
  toWeek: type.string(),
  fromDay: type.string(),
  toDay: type.string(),
  fromH_min: type.string(),
  toH_min: type.string()
});
price.belongsTo(Product, "product", "product", "id"); //nicht sicher, da referenzierung über type... und nicht id erfolgt
//relationship price-Order fehlt noch

exports.addPrice = function(price) {
  let newPrice = new Price(price);

  let temp = newPrice.save().then(result => {
    return result;
  });
  return temp;
};

function handleError(res) {
  return function(error) {
    console.log(error.message);
    return res.send(500, { error: error.message });
  };
}
