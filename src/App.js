import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import { MovieProvider } from "./context";
import HomePage from "./components/layout/HomePage";
import MovieDetails from "./components/Movies/MovieDetails";

class App extends Component {
  render() {
    return (
      <MovieProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie/title/:id" component={MovieDetails} />
        </Switch>
      </MovieProvider>
    );
  }
}

export default App;
