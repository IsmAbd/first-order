import axios from "axios";

let categoryArray = [
  {
    id: "",
    restaurant_id: "",
    name: "Vorspeise"
  },
  {
    id: "",
    restaurant_id: "",
    name: "Hauptgang"
  },
  {
    id: "",
    restaurant_id: "",
    name: "Nachspeise"
  }
];

let restaurantArray = [
  {
    id: "",
    name: "McDonalds",
    address: "Marienstr. 27",
    businessUserID: ""
  },
  {
    id: "",
    name: "PizzaHut",
    address: "Hausmannstr. 22",
    businessUserID: ""
  },
  {
    id: "",
    name: "Subway",
    address: "Königsstr. 59",
    businessUserID: ""
  }
];

let businessUserArray = [
  {
    id: ``,
    fname: `Bernd`,
    lname: `Kaulitz`,
    email: `berndkaulitz@gmail.com`,
    password: `password`,
    confirmPW: `password`
  },
  {
    id: ``,
    fname: `Maria`,
    lname: `Hausman`,
    email: `mariahausmann@gmail.com`,
    password: `password`,
    confirmPW: `password`
  },
  {
    id: ``,
    fname: `Sebastian`,
    lname: `Schrummpf`,
    email: `sebastianschrummpf@gmail.com`,
    password: `password`,
    confirmPW: `password`
  }
];
exports.insertData = function() {
  console.log("Inserting Data " + Date.now());

  generateBusinessUser()
    .then(result => {
      generateRestaurants(result).then(result => {
        generateCategories(result);
      });
    })
    .catch(err => {
      console.log(err);
    });
};

async function generateCategories(restaurants) {
  return new Promise((resolve, reject) => {
    innerFunction();
    async function innerFunction() {
      let index = 0;

      for (var element of categoryArray) {
        element.restaurant_id = restaurants[index].id;
        index++;
      }

      for (var element of categoryArray) {
        await postCategory(element)
          .then(result => {
            element.id = result.id;
          })
          .catch(err => {
            reject(err);
            throw new Error(err);
          });
      }

      resolve(categoryArray);
    }
  });
}

async function postCategory(category) {
  const { name, restaurant_id } = category;

  console.log(name);
  console.log(restaurant_id);
  try {
    const requestBody = {
      query: `
                        mutation {
                          addCategory(userInput: {
                              name: "${name}", 
                              restaurant_ID: "${restaurant_id}"}) {
                                  id
                              }
                          }
        
                      `
    };

    const { data } = await axios.post(
      "http://localhost:5000/graphql",
      requestBody
    );

    if (data.errors) {
      console.log(data.errors[0]);
    } else {
      /*         setError(null);
                setLoading(false); */
      const categoryResult = await data.data.addCategory;

      console.log(categoryResult);

      return categoryResult;
    }
  } catch (err) {
    console.log("[ERROR3] " + err);
  }
}
async function generateRestaurants(businessUser) {
  return new Promise((resolve, reject) => {
    innerFunction();

    async function innerFunction() {
      let index = 0;

      for (var element of restaurantArray) {
        element.businessUserID = businessUser[index].id;
        index++;
      }

      for (var element of restaurantArray) {
        await postRestaurant(element)
          .then(result => {
            element.id = result.id;
          })
          .catch(err => {
            reject(err);
            throw new Error(err);
          });
      }

      resolve(restaurantArray);
    }
  });
}

async function postRestaurant(restaurant) {
  const { name, address, businessUserID } = restaurant;
  try {
    const requestBody = {
      query: `
                        mutation {
                            addRestaurant(userInput: {
                                name: "${name}", 
                                address: "${address}", 
                                businessUser_ID: "${businessUserID}"}) {
                                    id
                                }
                            }
        
                      `
    };

    const { data } = await axios.post(
      "http://localhost:5000/graphql",
      requestBody
    );

    if (data.errors) {
      console.log("[ERROR2] " + data.errors);
    } else {
      /*         setError(null);
                setLoading(false); */
      const restaurantResult = await data.data.addRestaurant;

      return restaurantResult;
    }
  } catch (err) {
    console.log("[ERROR3] " + err);
  }
}

async function generateBusinessUser() {
  return new Promise((resolve, reject) => {
    innerFunction();
    async function innerFunction() {
      for (var element of businessUserArray) {
        await postBusinessUser(element)
          .then(result => {
            element.id = result.id;
          })
          .catch(err => {
            reject(err);
            throw new Error(err);
          });
      }

      resolve(businessUserArray);
    }
  });
}

async function postBusinessUser(businessUser) {
  const { fname, lname, email, password, confirmPW } = businessUser;
  try {
    const requestBody = {
      query: `
                        mutation {
                          addBusinessUser(userInput: {
                          fname: "${fname}", 
                          lname: "${lname}", 
                          email: "${email}", 
                          password: "${password}", 
                          confirmPW: "${confirmPW}"}){
                                id
                                token
                                email
                            }
                        }
                    `
    };

    const { data } = await axios.post(
      "http://localhost:5000/graphql",
      requestBody
    );

    if (data.errors) {
      console.log(data.errors);
    } else {
      /*         setError(null);
              setLoading(false); */
      const userResult = await data.data.addBusinessUser;

      return userResult;
    }
  } catch (err) {
    console.log("[ERROR5] " + err);
  }
}
