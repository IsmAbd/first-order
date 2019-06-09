import Category from "../../../models/category";
import Restaurant from "../../../models/restaurant";

export async function addCategory(args) {
  const { name, restaurantID } = args.userInput;

  const tempCategory = {
    name: name
  };

  let category = new Category(tempCategory);

  console.log(category);

  let restaurant = await Restaurant.filter({ id: restaurantID }).then(
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
  const { restaurantID } = args;

  let categories = await Category.filter({ restaurant_id: restaurantID })
    .getJoin({ restaurant: true, products: true })
    .then(result => {
      return result;
    });

  return categories;
}
