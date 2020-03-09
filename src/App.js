import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movie/title/:id" component={MovieDetails} />
      </Switch>
    </>
  );
};

export default App;
