import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Aboutus from "./aboutus";
import Connexion from "./connexion";
import Contact from "./contact";
import Map from "./map";
import Profile from "./profile";
import Register from "./register";
import Users from "./users";
import Admin from "./admin";
import Tchat from "./tchat";
import Order from "./order";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/aboutus" component={Aboutus} />
    <Route path="/connexion" component={Connexion} />
    <Route path="/contact" component={Contact} />
    <Route path="/map" component={Map} />
    <Route path="/profile" component={Profile} />
    <Route path="/register" component={Register} />
    <Route path="/users" component={Users} />
    <Route path="/admin" component={Admin} />
    <Route path="/tchat" component={Tchat} />
    <Route path="/order" component={Order} />
  </Switch>
);

export default Main;
