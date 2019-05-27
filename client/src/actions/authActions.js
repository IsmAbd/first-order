import { SET_AUTH_USER } from "./actions_types";
import axios from "axios";
import * as routes from "../constants/routes";

export function busignup(props, fname, lname, email, password, confirmPW) {
  return async function(dispatch) {
    try {
      const requestBody = {
        query: `
                  mutation {
                    addBusinessUser(userInput: {
                    fname: "${fname}", 
                    lname: "${lname}", 
                    email: "${email}", 
                    password: "${password}", 
                    confirmPW: "${confirmPW}"}){
                          id
                          token
                          email
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
        localStorage.setItem("token", token);
        props.history.push(routes.HOME);
      }
    } catch (e) {
      /*       setError(e);
      setLoading(false); */
    }
  };
}

export function buauth() {
  return async function(dispatch) {
    const token = localStorage.getItem("token");

    if (!!token) {
      try {
        const requestBody = {
          query: `
                   query {
                    verifyBusinessUserToken(token: "${token}") {
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
        const user = await data.data.verifyBusinessUserToken;

        if (user) {
          dispatch({
            //ich glaube das ist die action
            type: SET_AUTH_USER,
            payload: {
              id: user.id,
              email: user.email,
              fname: user.fname,
              lname: user.lname
            }
          });
        } else {
          dispatch({ type: SET_AUTH_USER, authUser: null });
          localStorage.removeItem("token");
        }
      } catch {
        dispatch({ type: SET_AUTH_USER, authUser: null });
      }
    } else {
      dispatch({ type: SET_AUTH_USER, authUser: null });
    }
  };
}

export function bulogout() {
  return function(dispatch) {
    console.log("logout called");
    dispatch({
      type: SET_AUTH_USER,
      payload: null
    });

    localStorage.removeItem("token");
  };
}

export function bulogin(props, email, password) {
  return async function(dispatch) {
    console.log("login called");
    try {
      const requestBody = {
        query: `
                        query {
                          businessUserLogin(email: "${email}", password: "${password}") {
                                id
                                token
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
        console.log(data.errors);
      } else {
        const { id, token, fname, lname } = await data.data.businessUserLogin;

        dispatch({
          type: SET_AUTH_USER,
          payload: {
            id: id,
            email: email,
            fname: fname,
            lname: lname
          }
        });
        localStorage.setItem("token", token);
        props.history.push(routes.HOME);
      }
    } catch (e) {
      //Error handling from try to fetch data
      console.log(e);
    }
  };
}
