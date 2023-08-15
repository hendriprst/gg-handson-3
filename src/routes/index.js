import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import TrendingGifs from "../pages/trending";
import FavoriteGifs from "../pages/favorite";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/trending">
          <TrendingGifs />
        </Route>
        <Route path="/favorite">
          <FavoriteGifs />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
