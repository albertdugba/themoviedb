import React from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import HomePage from "./pages/HomePage";
import MovieDetails from "./components/MovieDetails";
import { theme } from "./styles/Theme";

import "./App.scss";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movie/title/:id" component={MovieDetails} />
        </Switch>
      </>
    </ThemeProvider>
  );
};

export default App;
