import BusinessUser from "../../../models/business-user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Restaurant from "../../../models/restaurant";

export async function verifyBusinessUserToken(args) {
  console.log("Verify Token called");
  try {
    const decoded = jwt.verify(args.token, "mysecret");
    const businessUser = await BusinessUser.filter({ id: decoded.id }).then(
      result => {
        return result[0];
      }
    );
    return { password: null, ...businessUser };
  } catch (err) {
    throw err;
  }
}

export async function businessUserLogin(args) {
  try {
    const businessUser = await BusinessUser.filter({ email: args.email }).then(
      result => {
        if (!result[0]) {
          throw new Error("Email does not exist");
        }

        return result[0];
      }
    ); //looks for user in the database with the given email

    const passwordIsValid = await bcrypt.compareSync(
      args.password,
      businessUser.password
    ); //Checks if users password hash equals the saved password hash
    if (!passwordIsValid) throw new Error("Password incorrect"); //Throws error if password hashes are not equal
    const token = jwt.sign({ id: businessUser.id }, "mysecret");
    return { token, password: null, ...businessUser };
  } catch (err) {
    throw err;
  }
}

export async function addBusinessUser(args) {
  try {
    const { fname, lname, email, password, confirmPW } = args.userInput; //retrieve values from arguments

    await BusinessUser.filter({ email: email }).then(result => {
      if (result[0]) {
        throw new Error("User already exists!"); //throws error, if user is already there
      }
      return result[0];
    }); //Looks for existing user in DB

    if (password !== confirmPW) {
      throw new Error("Passwords are inconsistent!"); //throws error if pw is not equals confirmation of pw
    }

    const hashedPassword = await bcrypt.hash(password, 10); //hashes the users pw
    const businessUser = new BusinessUser(
      {
        fname,
        lname,
        email,
        password: hashedPassword
      },
      err => {
        if (err) throw err;
      } //Makes new instance of User with new hashed PW and email
    );

    businessUser.save(); //Saves user in db
    // if user is registered without errors
    // create a token
    const token = jwt.sign({ id: businessUser.id }, "mysecret"); //generates user token with users id assigned to it as well as a secred word which needs to be remembered

    return { token, password: null, ...businessUser }; //returns token
  } catch (err) {
    throw err;
  }
}

//Function to add 1 restaurant to a business user -> right now its just possible to add one restaurant because theres no
//Update function yet
export async function addRestaurantToBusinessUser(args) {
  //Getting the businessuser
  var businessUser = await BusinessUser.filter({ id: args.userId }).then(
    result => {
      return result[0];
    }
  );

  //Getting the restaurant
  var restaurant = await Restaurant.filter({ id: args.restaurantId }).then(
    result => {
      return result[0];
    }
  );

  //Adding relationship -> ModelA.relationship = ModelB. relationship was specified as second parameter in the model class (business-user.js & restaurant.js)
  businessUser.restaurants = restaurant;
  restaurant.businessuser = businessUser;

  //Saving everything
  businessUser.saveAll({ restaurants: true }).then(result => {
    //Error handling...
  });

  //Getting the result by joining
  var result = await BusinessUser.filter({ id: businessUser.id })
    .getJoin({ restaurants: true })
    .then(result => {
      return result[0];
    });

  //returning result to GraphQL
  return result;
}
