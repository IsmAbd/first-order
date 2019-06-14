import Category from "../../../models/category";
import Restaurant from "../../../models/restaurant";

export async function addCategory(args) {
  const { name, restaurant_ID } = args.userInput;

  const tempCategory = {
    name: name
  };

  let category = new Category(tempCategory);

  console.log(category);

  let restaurant = await Restaurant.filter({ id: restaurant_ID }).then(
    result => {
      return result[0];
    }
  );

  restaurant.categories = category;
  category.restaurant = restaurant;

  let result = await category.saveAll({ restaurant: true }).then(result => {
    return result;
  });

  return result;
}

export async function getCategoriesByRestaurantID(args) {
  const { restaurant_ID } = args;

  let categories = await Category.filter({ restaurant_id: restaurant_ID })
    .getJoin({
      restaurant: true,
      products: { prices: true }
    })
    .then(result => {
      return result;
    });

  return categories;
}
