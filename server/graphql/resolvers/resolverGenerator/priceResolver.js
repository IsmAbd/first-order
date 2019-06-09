import Product from "../../../models/product";
import Price from "../../../models/price";

export async function addPrice(args) {
  const {
    productID,
    price,
    fromYear,
    toYear,
    fromMonth,
    toMonth,
    fromWeek,
    toWeek,
    fromDay,
    toDay,
    fromH_min,
    toH_min
  } = args.userInput;

  const tempPrice = {
    price,
    fromYear,
    toYear,
    fromMonth,
    toMonth,
    fromWeek,
    toWeek,
    fromDay,
    toDay,
    fromH_min,
    toH_min
  };

  console.log(tempPrice);
  let priceObejct = new Price(tempPrice);

  let product = await Product.filter({ id: productID }).then(result => {
    return result[0];
  });

  product.prices = priceObejct;
  priceObejct.product = product;

  let result = await priceObejct.saveAll({ product: true }).then(result => {
    return result;
  });

  return result;
}
