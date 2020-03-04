import React, { Component } from "react";
import LoginForm from "./components/LoginForm/LoginForm";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import ItemList from "./components/itemList";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/list" component={ItemList} />
              <Route path="/login" render={props => <LoginForm {...props} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
