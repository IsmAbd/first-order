import db from "../../../database/index";
//Example Resolvers with two functions

export async function findRocketById(args) {
  var rocket = db.findRocketById(args.id).then(result => {
    if (result) {
      return result;
    } else {
      throw new Error("No matching item found");
    }
  });

  return rocket;
}

export async function findAllRockets() {
  var rockets = db.findAllRockets().then(results => {
    return results;
  });

  return rockets;
}

//Mutation with working DB insertion -> Open RethinkDB with a Database and a Table called "Rockets"
export async function createRocket(args) {
  //Not necessary to make an object but easier to read

  try {
    const { name, date } = args.userInput; //retrieve values from arguments
    const Rocket = { name: name, date: date };

    //Calls openConnection method which gives a Promise with the connection when resolving
    //Inserts test Rocket
    db.saveRocket(Rocket)
      .then(result => {
        console.log(result);
      })
      .catch(result => {
        console.log(result);
      });

    return Rocket;
  } catch (error) {
    throw error;
  }
}
