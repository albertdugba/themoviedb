import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import MovieProvider from "./components/context";
import Banner from "./components/Layouts/Banner";
import TvShows from "./components/Movies/TvShows";
import NavBar from "./components/Layouts/NavBar";

class App extends Component {
  render() {
    return (
      <Router>
        <MovieProvider>
          <div>
            <div className="navbar-header">
              <NavBar />
            </div>
            <Switch>
              <Route exact path="/tvshows" component={TvShows} />
              <Banner />
            </Switch>
          </div>
        </MovieProvider>
      </Router>
    );
  }
}

export default App;
