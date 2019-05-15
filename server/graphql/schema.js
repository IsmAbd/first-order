import {buildSchema} from "graphql";

export default buildSchema(`


type Restaurant {
    id: ID!
    name: String!
    address: String!
    payment_method_id: String
    tables: [String!]!
    businessuser: BusinessUser
}


input InputRestaurant{
    name: String!
    address: String!
    payment_method_id: String

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

type BusinessUser{
    id: ID!
    fname: String!
    lname: String!
    email: String!
    token: String!
    payment_method_id: String
    restaurants: [Restaurant!]
}

input InputBusinessUser{
    fname: String!
    lname: String!
    email: String!
    password: String!
    confirmPW: String!
}


type Product {
    id: ID!             
    name: String!
    description: String!
    category: String!
    type: String!
    image_path: String
}

input InputProduct {
    name: String!
    description: String!
    category: String!
    type: String!
}

type Price {
    id: ID!
    price: String!
    product: Product!
    fromYear: String
    toYear: String
    fromMonth: String
    toMonth: String
    fromWeek: String
    toWeek: String
    fromDay: String
    toDay: String
    fromH_min: String
    toH_min: String
}

input InputPrice {
    price: String!
    product: Product!
    fromYear: String
    toYear: String
    fromMonth: String
    toMonth: String
    fromWeek: String
    toWeek: String
    fromDay: String
    toDay: String
    fromH_min: String
    toH_min: String
}


type RootQuery {
    getAllRestaurants: [Restaurant!]!
    getRestaurantByID(id: String!): Restaurant
    userLogin(email: String!, password: String!): User
    verifyUserToken(token: String!):User

    businessUserLogin(email: String!, password: String!): BusinessUser
    verifyBusinessUserToken(token: String!):BusinessUser

    addRestaurantToBusinessUser(userId: String!, restaurantId: String!):BusinessUser!
}

type RootMutation{
    addRestaurant(userInput: InputRestaurant): Restaurant
    addUser(userInput: InputUser): User
    addBusinessUser(userInput: InputUser): BusinessUser
    addProduct(userInput: InputProduct): Product
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`);
