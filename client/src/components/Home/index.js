import React, { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import AuthHome from "../BusinessUser/BUDashboard/dashboard";
import NonAuthHome from "./nonauth";

//Component decides which page is shown, depending of the users authentication status

function Home() {
  const mapState = useCallback(
    state => ({
      authUser: state.sessionState.authUser
    }),
    []
  );

  const { authUser } = useMappedState(mapState);

  return authUser ? <AuthHome /> : <NonAuthHome />;
}

export default Home;
