import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { MovieProvider } from "./context";
import HomePage from "./components/layout/HomePage";

class App extends Component {
  render() {
    return (
      <MovieProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </MovieProvider>
    );
  }
}

export default App;
