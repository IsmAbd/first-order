import r from "rethinkdb";
import { resolve } from "path";
import { rejects } from "assert";

var dbConfig = {
  host: process.env.RDB_HOST || "localhost",
  port: parseInt(process.env.RDB_PORT) || 28015,
  db: process.env.RDB_DB || "test",
  tables: {
    Rockets: "id"
  }
};

module.exports.setup = function() {
  r.connect({ host: dbConfig.host, port: dbConfig.port }, function(
    err,
    connection
  ) {
    r.dbCreate(dbConfig.db).run(connection, function(err, result) {
      if (err) {
        console.log(
          "[DEBUG] RethinkDB database '%s' already exists (%s:%s)\n%s",
          dbConfig.db,
          err.name,
          err.msg,
          err.message
        );
      } else {
        console.log("[INFO ] RethinkDB database '%s' created", dbConfig.db);
      }

      for (var tbl in dbConfig.tables) {
        (function(tableName) {
          r.db(dbConfig.db)
            .tableCreate(tableName, { primaryKey: dbConfig.tables[tbl] })
            .run(connection, function(err, result) {
              if (err) {
                console.log(
                  "[DEBUG] RethinkDB table '%s' already exists (%s:%s)\n%s",
                  tableName,
                  err.name,
                  err.msg,
                  err.message
                );
              } else {
                console.log("[INFO ] RethinkDB table '%s' created", tableName);
              }
            });
        })(tbl);
      }
    });
  });
};

module.exports.findRocketById = function(rocketId) {
  return new Promise((resolve, reject) => {
    onConnect(function(err, connection) {
      r.db(dbConfig["db"])
        .table("Rockets")
        .get(rocketId)
        .run(connection, function(err, result) {
          if (err) {
            console.log(
              "[ERROR][%s][findUserById] %s:%s\n%s",
              connection["_id"],
              err.name,
              err.msg,
              err.message
            );

            reject(result);
          } else {
            resolve(result);
          }
          connection.close();
        });
    });
  });
};

module.exports.saveRocket = function(rocket) {
  return new Promise((resolve, reject) => {
    onConnect(function(err, connection) {
      r.db(dbConfig["db"])
        .table("Rockets")
        .insert(rocket)
        .run(connection, function(err, result) {
          if (err) {
            console.log(
              "[ERROR][%s][saveMessage] %s:%s\n%s",
              connection["_id"],
              err.name,
              err.msg,
              err.message
            );
          } else {
            if (result.inserted === 1) {
              resolve(result);
            } else {
              reject(result);
            }
          }
          connection.close();
        });
    });
  });
};

module.exports.findAllRockets = function() {
  return new Promise((resolve, reject) => {
    onConnect(function(err, connection) {
      r.db(dbConfig["db"])
        .table("Rockets")
        .run(connection, function(err, result) {
          if (err) {
            console.log(
              "[ERROR][%s][saveMessage] %s:%s\n%s",
              connection["_id"],
              err.name,
              err.msg,
              err.message
            );
          } else {
            result.toArray((err, results) => {
              if (results.length > 0) {
                resolve(results);
              } else {
                reject(results);
              }
            });
          }
          connection.close();
        });
    });
  });
};

function onConnect(callback) {
  r.connect({ host: dbConfig.host, port: dbConfig.port }, function(
    err,
    connection
  ) {
    connection["_id"] = Math.floor(Math.random() * 10001);
    callback(err, connection);
  });
}
