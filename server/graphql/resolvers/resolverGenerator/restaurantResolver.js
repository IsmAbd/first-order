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
  //TEstS
  /* await Restaurant.get(args.id).addRelation("businessuser", {
    id: "14687ba7-4d56-49bc-a234-4aef7213a98a"
  }); */

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
      console.log(result);
      return result;
    } else {
      throw new Error("No matching item found");
    }
  });

  return restaurant;
}
