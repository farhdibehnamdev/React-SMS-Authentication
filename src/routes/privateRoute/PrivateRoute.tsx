import React from "react";
import SignIn from "components/signin/SignIn";
import { Outlet } from "react-router-dom";
const PrivateRoute = function () {
  const auth = true;

  return auth ? <Outlet /> : <SignIn />;
};

export default PrivateRoute;
