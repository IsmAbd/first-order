import { buildSchema } from "graphql";

//Building GraphQL Test Schema and exporting it
export default buildSchema(`

type Rocket {
    id: String!
    name: String!
    date: String!
}


type RootQuery {
    allRockets: Rocket
}

input InputRocket{
    id: String!
    name: String!
    date: String!
}

type RootMutation{
    createRocket (userInput: InputRocket): Rocket
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`);
