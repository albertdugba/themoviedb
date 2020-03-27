import React from "react";
import { Route, Switch } from "react-router-dom";

import MoviesContainer from "./components/MoviesContainer";
import MovieDetails from "./components/MovieDetails";

import "./App.scss";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/movie/title/:movieId" component={MovieDetails} />
      </Switch>
    </>
  );
};

export default App;
