import express from "express";
import bodyParser from "body-parser";
import expressGraphQL from "express-graphql";
import cors from "cors";
import graphQLSchema from "./graphql/schema.js";
import graphQLResolvers from "./graphql/resolvers";
import db from "./database/index";

const PORT = process.env.PORT || 5000;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

app.use(cors(corsOptions));
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
