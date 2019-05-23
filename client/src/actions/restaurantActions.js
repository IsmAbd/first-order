import { GET_RESTAURANTS, ADD_RESTAURANT } from "./actions_types";
import axios from "axios";

//TODO: Komplett implementieren.
export function getRestaurants(props, ownerID) {
  return async function(dispatch) {
    try {
      const requestBody = {
        query: `
            query {
             verifyBusinessUserToken(buid: "${token}") {
                    id
                    email
                    fname
                    lname
                }
            }
         `
      };

      const { data } = await axios.post(
        "http://localhost:5000/graphql",
        requestBody
      );

      if (data.errors) {
        /*         setError(data.errors[0].message);
          setLoading(false); */
      } else {
        /*         setError(null);
          setLoading(false); */
        const { id, token, fname, lname } = await data.data.addBusinessUser;

        console.log(id + " " + token);

        dispatch({
          type: SET_AUTH_USER,
          payload: {
            id: id,
            email: email,
            fname: fname,
            lname: lname
          }
        });
      }
    } catch (e) {
      /*       setError(e);
        setLoading(false); */
    }
  };
}
