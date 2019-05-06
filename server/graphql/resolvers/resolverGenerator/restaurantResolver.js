import Restaurant from "../../../models/restaurant";

export async function addRestaurant(args) {
  const { name, address, paymentMethodID } = args.userInput;

  const tempRestaurant = {
    name: name,
    address: address,
    paymentMethodID: paymentMethodID
  };

  var restaurant = new Restaurant(tempRestaurant);

  var temp = restaurant.save().then(result => {
    return result;
  });
  return temp;
}

export async function getRestaurantByID(args) {
  var restaurant = await Restaurant.filter({ id: args.id }).then(result => {
    if (result) {
      return result;
    } else {
      throw new Error("No matching item found");
    }
  });

  return restaurant[0];
}

export async function getAllRestaurants() {
  var restaurant = await Restaurant.then(result => {
    if (result) {
      return result;
    } else {
      throw new Error("No matching item found");
    }
  });

  return restaurant;
}
