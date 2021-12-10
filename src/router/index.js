import React from "react";
import propTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { menuItem } from "./routes";

const ProtectedRoute = ({ path, component: Component, }) => {
  const userCred = JSON.parse(localStorage.getItem('gallery'));
  const isLoggedIn = userCred?.email && userCred?.password;

  return isLoggedIn ? <Route exact path={path} component={Component} /> : <Redirect to={{ pathname: "/login", state: { to: path } }} />
}

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Redirect to="/login" /> */}
      <Switch>
        {menuItem.map((i) => (
          i.protected ? <ProtectedRoute key={`ProtectedRoute-${i.path}`} path={i.path} component={i.component} /> : <Route key={`Route-${i.path}`} exact path={i.path} component={i.component} />
        ))}
        <Redirect exact from="/" to="/homePage" />
      </Switch>
    </BrowserRouter>
  );
};
ProtectedRoute.propTypes = {
  path: propTypes.string.isRequired,
  component: propTypes.func.isRequired
}

export default Router;
