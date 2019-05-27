import { SET_AUTH_USER } from "../actions/actions_types";

const INITIAL_STATE = {
  authUser: false,
  loading: true
};
function sessionReducer(state = INITIAL_STATE, action) {
  //Hier geben wir an, wie der State je nach action type geändert werden soll
  console.log("session reducer called");
  switch (action.type) {
    case SET_AUTH_USER: {
      return {
        authUser: action.payload,
        loading: false
      };
    }
    default:
      return state;
  }
}
export default sessionReducer;
