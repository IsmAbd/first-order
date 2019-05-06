import { buildSchema } from "graphql";

//Building GraphQL Test Schema and exporting it
export default buildSchema(`


type Restaurant {
    id: ID!
    name: String!
    address: String!
    payment_method_id: String!
    tables: [String!]!
}


input InputRestaurant{
    name: String!
    address: String!
    payment_method_id: String!
}

type User {
    id: ID!
    fname: String!
    lname: String!
    email: String!
    token: String!
    payment_method_id: String
}

input InputUser{
    fname: String!
    lname: String!
    email: String!
    password: String!
    confirmPW: String!
}


type RootQuery {
    getAllRestaurants: [Restaurant!]!
    getRestaurantByID(id: String!): Restaurant
    login(email: String!, password: String!): User
    verifyToken(token: String!):User!

}

type RootMutation{
    addRestaurant(userInput: InputRestaurant): Restaurant
    addUser(userInput: InputUser): User
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`);
