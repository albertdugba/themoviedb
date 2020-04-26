import React from "react";
import { Route, Switch } from "react-router-dom";

import MoviesContainer from "./container/MovieContainer/MoviesContainer";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import CastProfile from "./components/Actors/CastProfile/CastProfile";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={MoviesContainer} />
        <Route exact path="/movie/title/:movieId" component={MovieDetails} />
        <Route exact path="/movie/cast/:castId" component={CastProfile} />
      </Switch>
    </>
  );
};

export default App;
