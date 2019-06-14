import { buildSchema } from "graphql";

export default buildSchema(`

type Order {
    id: ID!
    user: User!
    tableNumber: Int!
    orderStatus: Int!
    time: String!
    paid: Boolean!
    orderedProducts: [OrderedProduct!]
    restaurant: Restaurant!
}

input InputOrder {
    user_ID: String!
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

input InputOrderedProduct{
    product_ID: String!
    price_ID: String!
    amount: Int!
    wish: String!
}

type Restaurant {
    id: ID!
    name: String!
    address: String!
    payment_methods: [Payment_Method!]
    tables: [String!]
    businessUser: [BusinessUser!]
    categories: [Category!]
    orders: [Order!]
}

input InputRestaurant{
    name: String!
    address: String!
    businessUser_IDs: [String!]
    payment_method_IDs: [String!]
    tables: String!
}

type User {
    id: ID!
    fname: String!
    lname: String!
    email: String!
    token: String!
    payment_methods: [Payment_Method!]
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
    restaurants: [Restaurant!]
}

input InputBusinessUser{
    fname: String!
    lname: String!
    email: String!
    password: String!
    confirmPW: String!
}

type Payment_Method{
    id: ID!
    name: String!
}

input InputPayment_Method{
    name: String!
}

type Category {
    id: ID!
    name: String!
    restaurant: Restaurant!
    products: [Product!]
}

input InputCategory{
    name: String!
    restaurant_ID: String!
}

type Product {
    id: ID!             
    name: String!
    description: String!
    type: String!
    category: Category!
    image_path: String
    prices: [Price!]
}

input InputProduct {
    name: String!
    description: String!
    type: String!
    category_ID: String!
    imagePath: String
}

type Price {
    id: ID!
    price:String!
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
    productID: String!
    price: String!
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
    getAllRestaurants: [Restaurant]!
    getRestaurantByID(restaurantID: String!): Restaurant!
    getRestaurantsByBU(businessUser_id: String!): [Restaurant!]

    getCategoriesByRestaurantID(restaurantID: String!): [Category!]
    
    getProductByID(id: String!): Product!
    
    getOrdersByUser(user_id: ID!): [Order]
    getOrdersByUserAndPaid(user_id: ID!, paid: Boolean!): [Order]
    getOrdersByUserAndOrderStatus(user_id: ID!, orderStatus: Int!): [Order]
    
    userLogin(email: String!, password: String!): User
    verifyUserToken(token: String!): User

    businessUserLogin(email: String!, password: String!): BusinessUser
    verifyBusinessUserToken(token: String!): BusinessUser
}

type RootMutation{
    addRestaurant(userInput: InputRestaurant): Restaurant
    
    addCategory(userInput: InputCategory): Category
    
    addProduct(userInput: InputProduct): Product
    
    addPrice(userInput: InputPrice): Price
    
    addPaymentMethod(userInput: InputPayment_Method): Payment_Method
    
    addUser(userInput: InputUser): User
    
    addBusinessUser(userInput: InputUser): BusinessUser

}

schema {
    query: RootQuery
    mutation: RootMutation
}

`);
