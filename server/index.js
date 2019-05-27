const express = require("express");
const bodyParser = require("body-parser");
const expressGraphQL = require("express-graphql");
const cors = require("cors");
const graphQLSchema = require("./graphql/schema.js");
const graphQLResolvers = require("./graphql/resolvers");
const db = require("./database/index");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

//Uses GraphQL middleware
app.use(
    "/graphql",
    expressGraphQL({
        schema: graphQLSchema,
        rootValue: graphQLResolvers,
        graphiql: true
    })
);

function main() {
    db.setup();

    app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
}

main();
