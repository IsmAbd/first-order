import { combineReducers } from "redux";
import sessionReducer from "./sessions";
const rootReducer = combineReducers({
  sessionState: sessionReducer
});
export default rootReducer;
