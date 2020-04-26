import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalState";

ReactDOM.render(
  <Router>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Router>,
  document.getElementById("root"),
);

serviceWorker.register();
