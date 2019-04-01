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
app.use("/persons", express.static(__dirname + "/."));



app.get("/persons/all", function (req, res) {

  mongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
    if (err) throw err;
    var dbo = db.db("test");
    var query = {};
    dbo.collection("persons").find(query).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);

      res.render("./../views/template.ejs", {persons: result});
      db.close();
    });

});
});

app.get("/persons/search", function (req, res) {
    let id = req.query.id;

    mongoClient.connect(url, {useNewUrlParser: true}, function(err, db) {
      if (err) throw err;
      var dbo = db.db("test");
      var query = { name: id};
      dbo.collection("persons").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);


        res.render("./../views/templateUPDATED.ejs", {persons: result});
        //res.send(result);
        db.close();
      });
});
});

app.post("/persons/save", function (req, res) {
    var id = req.body.id;
    console.log(id);
    //data[id].name = "Testperson";//req.body.name;
    //data[id].address = req.body.address;
    //data[id].tel = req.body.tel;
    res.send(data);
})

var port = 8080;
server.listen(port);
console.log("Server running on port " + port);
