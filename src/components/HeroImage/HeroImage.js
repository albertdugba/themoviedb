import React from "react";
import Spinner from "../Spinner";

import classes from "./HeroImage.module.css";

const HeroImage = ({ hero }) => {
  const { heroImg } = hero;

  const loaded =
    heroImg == null || heroImg === undefined ? (
      <Spinner />
    ) : (
      <div className={classes.Banner}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original/${heroImg.backdrop_path}`}
            alt={heroImg.title}
            className={classes.BannerOverlay}
          />
        </div>
        <div className={classes.Featured}>
          <div className={classes.FeaturedCard}>
            <h3>{heroImg.title}</h3>
            <p>{heroImg.overview}</p>
          </div>
        </div>
      </div>
    );
  return <div>{loaded}</div>;
};

export default HeroImage;
