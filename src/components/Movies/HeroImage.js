import React from "react";

import "../../App.css";
import { MovieConsumer } from "../../context";

const HeroImage = () => {
  return (
    <MovieConsumer>
      {value => {
        const { heroImage } = value;
        console.log("Hero Image", heroImage.poster_path);
        return (
          <React.Fragment>
            <div className="hero">
              <img
                src={`https://image.tmdb.org/t/p/w500/${heroImage.poster_path}`}
                alt={heroImage.title}
              />
            </div>
            <div className="hero-content">
              <div className="hero-text">
                <h1>Title:{heroImage.title}</h1>
                <p>Overview"{heroImage.overview}</p>
              </div>
            </div>
          </React.Fragment>
        );
      }}
    </MovieConsumer>
  );
};

export default HeroImage;
