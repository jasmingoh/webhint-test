import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Blank2 from "./components/Blank2";
import Master_Detail from "./components/Master_Detail";
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          < Redirect exact path = "/" to = "/Blank2" />
          < Route path = "/Blank2" component = { Blank2 } />
          < Route path = "/Master_Detail" component = { Master_Detail } />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
