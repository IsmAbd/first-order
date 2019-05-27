import {
  GET_RESTAURANTS,
  ADD_RESTAURANT,
  SET_RESTAURANT
} from "../actions/actions_types";

const INITIAL_STATE = {
  restaurants: [],
  activeRestaurant: {
    id: "",
    name: "Choose A Restaurant",
    address: ""
  }
};
function restaurantReducer(state = INITIAL_STATE, action) {
  //Hier geben wir an, wie der State je nach action type geändert werden soll

  switch (action.type) {
    case GET_RESTAURANTS: {
      return {
        restaurants: action.payload
      };
    }
    case ADD_RESTAURANT: {
      return {
        //DOSTUFF
      };
    }
    case SET_RESTAURANT: {
      return {
        ...state,
        activeRestaurant: action.payload
      };
    }
    default:
      return state;
  }
}
export default restaurantReducer;
