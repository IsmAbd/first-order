import React from "react";
import BULogin from "../Login/BULogin";
import BUSignup from "../Signup/BUSignup";
import { withRouter } from "react-router-dom";

function BUAccess() {
  return (
    <div>
      <h1> Business User</h1>
      <BULogin />
      <BUSignup />
    </div>
  );
}

export default withRouter(BUAccess);
