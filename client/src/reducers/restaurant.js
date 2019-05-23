import { GET_RESTAURANTS, ADD_RESTAURANT } from "../actions/actions_types";

const INITIAL_STATE = {
  restaurants: []
};
function restaurantReducer(state = INITIAL_STATE, action) {
  //Hier geben wir an, wie der State je nach action type geändert werden soll

  switch (action.type) {
    case GET_RESTAURANTS: {
      return {
        restaurants: action.payload
      };
    }
    default:
      return state;
  }
}
export default restaurantReducer;
