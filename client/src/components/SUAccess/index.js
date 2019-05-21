import React from "react";
import SULogin from "../Login/SULogin";
import SUSignup from "../Signup/SUSignup";
import { withRouter } from "react-router-dom";

function SUAccess() {
  return (
    <div>
      <h1> User </h1>
      <SULogin />
      <SUSignup />
    </div>
  );
}

export default withRouter(SUAccess);
