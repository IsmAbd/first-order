import { buildSchema } from "graphql";

export default buildSchema(`

type Order {
    id: ID!
    user: User!
    restaurant: Restaurant!
    tableNumber: Int!
    orderStatus: Int!
    time: String!
    paid: Boolean!
    products: [OrderedProduct!]!
}

input InputOrder {
    tableNumber: Int!
    orderStatus: Int!
    time: String!
    paid: Boolean!
}


type OrderedProduct{
    id: ID!
    product: Product!
    price: Price!
    amount: Int!
    wish: String!
}

type Restaurant {
    id: ID!
    name: String!
    address: String!
    payment_methods: [Payment_Method!]
    tables: [String!]!
    businessUsers: [BusinessUser!]
    products: [Product!]
    orders: [Order!]
}


input InputRestaurant{
    name: String!
    address: String!
    businessUserID: String!
}

type User {
    id: ID!
    fname: String!
    lname: String!
    email: String!
    token: String!
    payment_methods: [Payment_Method!]
    orders: [Order!]
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
    payment_methods: [Payment_Method!]
    restaurants: [Restaurant!]
}

type Payment_Method{
    id: ID!
    name: String!
}


input InputPayment_Method{
    name: String!
}

input InputBusinessUser{
    fname: String!
    lname: String!
    email: String!
    password: String!
    confirmPW: String!
}

type Category {
    id: ID!
    name: String!
}

input InputCategory{
    name: String!
}

type Product {
    id: ID!             
    name: String!
    description: String!
    category: Category!
    type: String!
    image_path: String
    price: Price!
}

input InputProduct {
    name: String!
    description: String!
    type: String!
}

type Price {
    id: ID!
    price:Float!
    fromYear: Int
    toYear: Int
    fromMonth: Int
    toMonth: Int
    fromWeek: Int
    toWeek: Int
    fromDay: Int
    toDay: Int
    fromH_min: String
    toH_min: String
}

input InputPrice {
    price: Float!
    fromYear: Int
    toYear: Int
    fromMonth: Int
    toMonth: Int
    fromWeek: Int
    toWeek: Int
    fromDay: Int
    toDay: Int
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
