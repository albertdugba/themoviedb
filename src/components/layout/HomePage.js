import React from "react";
import MoviesResult from "../Movies/MoviesResult";

import "../../App.css";
import SearchParams from "../SearchParams";
import HeroImage from "../Movies/HeroImage";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroImage />
      <div className="movies-container">
        <SearchParams className="text-center" />
        <MoviesResult />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
