let http = require("http");
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let server = http.createServer(app);
const mongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use("/order", express.static(__dirname + "/."));



app.get("/order/all", function (req, res) {

  mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    //select database, TODO: change db name to correct one
    var dbo = db.db("test");
    //query all entries, TODO: change to correct query
    var query = {};
    //choose collection to be queried, TODO:
    dbo.collection("restaurants").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);

      res.render("./../views/template.ejs", {persons: result});
      db.close();
    });

});
});

app.get("/order/search", function (req, res) {

    let id = req.query.id;
    mongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
      if (err) throw err;
      var dbo = db.db("firstorder");
      var query = { name: id};
      dbo.collection("restaurants").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

        res.render("./../views/template.ejs", {persons: result});
        db.close();
      });
});
});

//not working like that
app.post("/order/save", function (req, res) {
    var id = req.body.id;
    console.log(id);
    res.send(data);
})

var port = 8080;
server.listen(port);
console.log("Server running on port " + port);
