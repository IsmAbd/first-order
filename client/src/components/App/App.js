import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import AllRestaurants from "../AllRestaurants/AllRestaurants";
import Navbar from "../Navbar/Navbar";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <Navbar />
    <AllRestaurants />
    <div />
  </ApolloProvider>
);

export default App;
