import React from "react";

import { Switch, Route } from "react-router-dom";

import LoginPage from "./pages/Login";
import DashboardPage from "./pages/Dashboard";
import HomePage from "./pages/Home";
import UserPage from "./pages/User";

export default function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />

      <Route exact path="/login" component={LoginPage} />

      <Route exact path="/users" component={UserPage} />

      <Route exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
}
