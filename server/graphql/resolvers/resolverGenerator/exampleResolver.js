import r from "rethinkdb";
import openConnection from "../../../database/index";
//Example Resolvers with two functions

//Simulates retreiving data from db and returns them for GraphQL query
export async function allRockets() {
  const rocket = {
    id: "Falcon",
    name: "Falcon 1",
    date: "21.04.2019"
  };

  //returns rocket object
  return rocket;
}

//Mutation with working DB insertion -> Open RethinkDB with a Database and a Table called "Rockets"
export async function createRocket(args) {
  console.log("createRocket called");

  const { id, name, date } = args.userInput; //retrieve values from arguments

  //Not necessary to make an object but easier to read
  const Rocket = { id: id, name: name, date: date };

  //Calls openConnection method which gives a Promise with the connection when resolving
  //Inserts test Rocket
  openConnection().then(conn => {
    r.table("Rockets")
      .insert([{ id: Rocket.id, name: Rocket.name, date: Rocket.date }])
      .run(conn, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
  });

  return Rocket;
}
