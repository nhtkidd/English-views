import React from "react";
import { Switch, Route } from "react-router-dom";
import Certificado from "../views/Certificado";
import Dashboard from "../views/dashboard";

import Login from "../views/Login";
import SingIn from "../views/SingIn";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/certificado">
        <Certificado />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard></Dashboard>
      </Route>
      <Route exact path="/sing-in">
        <SingIn></SingIn>
      </Route>
    </Switch>
  );
};

export default Routes;
