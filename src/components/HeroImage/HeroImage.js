import React from "react";
import Spinner from "../Spinner/Spinner";

import classes from "./HeroImage.module.css";
import defaultBanner from "../../img/defaultBanner.png";

const HeroImage = ({ hero }) => {
  const { heroImg } = hero;

  const loaded =
    heroImg == null || heroImg === undefined ? (
      <Spinner />
    ) : (
      <div className={classes.Banner}>
        {/* 1 */}
        <div>
          <img
            src={
              heroImg.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${heroImg.backdrop_path}`
                : defaultBanner
            }
            alt={heroImg.title}
            className={classes.BannerOverlay}
          />
        </div>

        {/* 2 */}
        <div className={classes.Featured}>
          <div className={classes.FeaturedCard}>
            <h1>{heroImg.title}</h1>
            <p>{heroImg.overview}</p>
          </div>
        </div>
      </div>
    );
  return <div>{loaded}</div>;
};

export default HeroImage;
