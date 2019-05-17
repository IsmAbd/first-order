import Restaurant from "../../../models/restaurant";

export async function addRestaurant(args) {
  const { name, address, paymentMethodID, tables } = args.userInput;

  const tempRestaurant = {
    name: name,
    address: address,
    paymentMethodID: paymentMethodID,
    tables: tables
  };

  var restaurant = new Restaurant(tempRestaurant);

  var temp = restaurant.save().then(result => {
    return result;
  });
  return temp;
}

export async function getRestaurantByID(args) {
  var result = await Restaurant.filter({ id: args.id })
    .getJoin({ businessuser: true })
    .then(result => {
      console.log(result[0]);
      return result[0];
    });

  return result;
}

export async function getAllRestaurants() {
  var result = await Restaurant.getJoin({ businessuser: true }).then(result => {
    return result;
  });

  return result;
}
