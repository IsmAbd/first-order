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
    products: OrderedProduct!

}


type OrderedProduct{
    id: ID!
    product: Product!
    order: Order!
    price: Price!
    amount: Int!
    wish: String!

}

type MenuCard{
    id: ID!
    restaurant: Restaurant!
    products: [Product!]
}

type Restaurant {
    id: ID!
    name: String!
    address: String!
    payment_method_id: String
    tables: [String!]!
    businessuser: BusinessUser
    menuCard: MenuCard!
    orders: [Order!]
}


input InputRestaurant{
    name: String!
    address: String!
    businessUserID: String!
    payment_method_id: String

}

type User {
    id: ID!
    fname: String!
    lname: String!
    email: String!
    token: String!
    payment_method_id: String
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

type Category {
    id: ID!
    name: String!
    products: [Product!]
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
    price: String!
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
