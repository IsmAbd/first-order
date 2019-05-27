import { combineReducers } from "redux";
import sessionReducer from "./sessions";
import restaurantReducer from "./restaurant";

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  restaurantState: restaurantReducer
});
export default rootReducer;
