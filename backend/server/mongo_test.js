const express = require('express');
const app = express();
const http = require('http');
const bodyParser = require('body-parser');
const server = http.createServer(app);
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
/*mongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
    let db = client.db("test");
    db.collection('restaurants').find({},{projection:{'name':1,'_id':0,'borough':1}}).toArray(function(err, res){
      console.log(res);
      console.log("Notice 1")

    });
    client.close();
});
*/

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("test");
//  var query = { borough: "Bronx" };
  var query =  {'name': /.*New China.*/};
  dbo.collection("restaurants").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });


});


server.listen(8080, function () {
    console.log("server listening on 8080");
});
