import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import App from "../App";
import About from "./About";
import NotFound from "./NotFound";

const Router = props => (
  <BrowserRouter>
    <div>
      <header>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Todo app
        </NavLink>
        <NavLink to="/about" activeClassName="is-active">
          About
        </NavLink>
      </header>
      <Switch>
        {/* 1) rule => / => App-component
            2) rule => /about => About-component
            3) rule => Not-found-component */}
        <Route exact path="/" component={App} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
      <footer>
        &copy 2018 - Meraki Todo <Link to="/">Go home</Link>
      </footer>
    </div>
  </BrowserRouter>
);

export default Router;
