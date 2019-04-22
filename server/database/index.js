import r from "rethinkdb";

//Opens connection to local db
export default function openConnection() {
  let connection = null;
  return new Promise(function(resolve, reject) {
    //Checks if connection is existing, if yes, resolves with the connection for promise
    if (connection != null) {
      resolve(connection);
    } else {
      //if not, opens new connection and resolves connection for promise
      r.connect({ host: "localhost", port: 28015 }, function(err, conn) {
        if (err) throw err;
        connection = conn;
        if (connection != null) {
          resolve(connection);
        } else {
          reject("Error");
        }
      });
    }
  });
}
