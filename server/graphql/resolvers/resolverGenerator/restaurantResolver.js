import Restaurant from "../../../models/restaurant";
import BusinessUser from "../../../models/business-user";

export async function addRestaurant(args) {
  const {
    name,
    address,
    paymentMethodID,
    tables,
    businessUserID
  } = args.userInput;

  console.log("Called1");
  const tempRestaurant = {
    name: name,
    address: address,
    paymentMethodID: paymentMethodID,
    tables: tables
  };

  let restaurant = new Restaurant(tempRestaurant);

  console.log(businessUserID);
  let businessUser = await BusinessUser.filter({
    id: businessUserID
  }).then(result => {
    console.log(result[0]);
    return result[0];
  });

  businessUser.restaurants = restaurant;
  restaurant.businessuser = businessUser;

  restaurant.saveAll({ businessuser: true }).then(result => {
    //Error handling...
  });

  let result = await Restaurant.filter({ id: restaurant.id })
    .getJoin({ businessuser: true })
    .then(result => {
      console.log(result[0]);
      return result[0];
    });

  return result;
}

export async function getRestaurantByID(args) {
  let result = await Restaurant.filter({ id: args.id })
    .getJoin({ businessuser: true })
    .then(result => {
      console.log(result[0]);
      return result[0];
    });

  return result;
}

export async function getAllRestaurants() {
  let result = await Restaurant.getJoin({ businessuser: true }).then(result => {
    return result;
  });

  return result;
}

export async function getRestaurantsByBU(args) {
  let result = await Restaurant.filter({
    businessuserId: args.businessUser_id
  })
    .then(result => {
      return result;
    })
    .catch(err => {
      console.log(err);
    });

  return result;
}
