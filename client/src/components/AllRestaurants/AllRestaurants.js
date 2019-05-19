import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const AllRestaurants = () => (
  <Query
    query={gql`
      {
        getAllRestaurants {
          name
          id
          businessuser {
            fname
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.getAllRestaurants.map(restaurant => (
        <div key={restaurant.id}>
          <p>{restaurant.name}</p>
        </div>
      ));
    }}
  </Query>
);

export default AllRestaurants;
