import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "redux-react-hook";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import * as actions from "../../../constants/actions_types";
import * as routes from "../../../constants/routes";

const styles = theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

function Signup(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [confirmPW, setConfirmPW] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { classes } = props;

  const handleChange = setter => e => {
    setter(e.target.value);
  };

  const submit = async e => {
    e.preventDefault();
    setLoading(true);
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
        setError(data.errors[0].message);
        setLoading(false);
      } else {
        setError(null);
        setLoading(false);
        const { id, token } = await data.data.addBusinessUser;

        console.log(id + " " + token);

        dispatch({
          type: actions.SET_AUTH_USER,
          authUser: {
            id,
            email
          }
        });
        localStorage.setItem("token", token);
        props.history.push(routes.HOME);
      }
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  };

  return (
    <div>
      <Typography component="h1" variant="h5">
        Business User Signup
      </Typography>
      <form className={classes.form}>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">First Name</InputLabel>
          <Input
            id="fname"
            name="fname"
            autoComplete="fname"
            autoFocus
            onChange={handleChange(setFname)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Last Name</InputLabel>
          <Input
            id="lname"
            name="lname"
            autoComplete="lname"
            onChange={handleChange(setLname)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="email">Email Address</InputLabel>
          <Input
            id="email"
            name="email"
            autoComplete="email"
            onChange={handleChange(setEmail)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            name="password"
            type="password"
            id="password"
            onChange={handleChange(setPassword)}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <InputLabel htmlFor="password">Confirm Password</InputLabel>
          <Input
            name="confirmpassword"
            type="password"
            id="confirmpassword"
            onChange={handleChange(setConfirmPW)}
          />
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={submit}
        >
          SignUp
        </Button>
      </form>
    </div>
  );
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(Signup));
