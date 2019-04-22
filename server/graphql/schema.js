import { buildSchema } from "graphql";

//Building GraphQL Test Schema and exporting it
export default buildSchema(`

type Rocket {
    id: ID!
    name: String!
    date: String!
}

input InputRocket{
    name: String!
    date: String!
}


type RootQuery {
    testReturn: Rocket!
    findRocketById(id: String!): Rocket!
    findAllRockets: [Rocket!]!
}

type RootMutation{
    createRocket (userInput: InputRocket): Rocket
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`);
