import {
  GET_RESTAURANTS,
  ADD_RESTAURANT,
  SET_RESTAURANT
} from "./actions_types";
import axios from "axios";

export function setRestaurant(name, id, address) {
  return function(dispatch) {
    dispatch({
      type: SET_RESTAURANT,
      payload: {
        id: id,
        name: name,
        address: address
      }
    });
  };
}
