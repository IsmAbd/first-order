import React, { useCallback } from "react";
import "./App.css";
import * as routes from "../../constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BUAccess from "../BusinessUser/BUAccess";
import SUAccess from "../SingleUser/SUAccess";
import Home from "../Home";
import useWithAuthenticate from "../WithAuthenticate";
import { useMappedState } from "redux-react-hook";
import Navigation from "../Navbar";

//Last component before root component

function App() {
  useWithAuthenticate();
  const mapState = useCallback(
    state => ({
      loading: state.sessionState.loading
    }),
    []
  );
  const { loading } = useMappedState(mapState);
  if (loading) return <h1>Loading...</h1>;

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <Switch>
            <Route exact path={routes.HOME} component={() => <Home />} />
            <Route exact path={routes.BULOGIN} component={() => <BUAccess />} />
            <Route exact path={routes.SULOGIN} component={() => <SUAccess />} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
