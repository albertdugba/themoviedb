import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalState";

ReactDOM.render(
  <Router>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </Router>,
  document.getElementById("root")
);
