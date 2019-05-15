import { buildSchema } from "graphql";

//Alle restlichen Models als type abbilden (Patrick)
//Alle resolver schreiben. (Ismael)
//Überlegen welche queries benötigt werden (Alle!)
//Datentypen in allen Models anpassen (Welche Datentypen sind sinnvoll) (Olli, Yannick)
//Wie verbindet man Relationen --> Relationen erstellen (Alle!!)
//Kernaufgabe überlegen.
//--> User loggt sich ein, sieht Produktkarte von Restaurant und kann in den Warenkorb legen + bestellung aufgeben.

//Building GraphQL Test Schema and exporting it
//waru, sind ids and ID und nicht String definiert?
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
}

type product {
    id: ID!             
    name: String!
    description: String!
    category: String!
    type: String!
    image_path: String


}
input product {
    name: String!
    description: String!
    category: String!
    type: String!
}

type price {
    id: ID!
    price: String!
    product: product!
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

input price {
    price: String!
    product: product!
    fromYear: String
    toYear: String
    fromMonth: String
    toMonth: String
    fromWeek: String
    toWeek: String
    fromDAy: String
    toDay: String
    fromH:min: String
    toH_min:String
}

schema {
    query: RootQuery
    mutation: RootMutation
}

`);
