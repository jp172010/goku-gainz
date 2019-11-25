import React from "react";
import "./App.css";
import Home from "./components/Home";
import CreateAccount from "./components/createAccount";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/createAccount">
          <CreateAccount />
        </Route>
      </Switch>
    </Router>
  );
}
