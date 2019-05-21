import React, { useCallback } from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import * as routes from "../../constants/routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BULogin from "../BULogin/BULogin";
import SULogin from "../SULogin/SULogin";
import Home from "../Home";
import useWithAuthenticate from "../WithAuthenticate";
import { useMappedState } from "redux-react-hook";
import Navigation from "../Navbar";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

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
    <ApolloProvider client={client}>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navigation />
          <header className="App-header">
            <Switch>
              <Route exact path={routes.HOME} component={() => <Home />} />
              <Route
                exact
                path={routes.BULOGIN}
                component={() => <BULogin />}
              />
              <Route
                exact
                path={routes.SULOGIN}
                component={() => <SULogin />}
              />
            </Switch>
          </header>
        </div>
      </Router>

      <div />
    </ApolloProvider>
  );
}

export default App;
