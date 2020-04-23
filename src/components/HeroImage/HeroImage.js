import React from "react";
import Spinner from "../Spinner";

import classes from "../Spinner.module.css";

const HeroImage = ({ hero }) => {
  const { heroImg } = hero;
  console.log(heroImg);
  const loaded =
    heroImg == null || heroImg === undefined ? (
      <Spinner />
    ) : (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${heroImg.backdrop_path}`}
          alt={heroImg.title}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    );
  return <div>{loaded}</div>;
};

export default HeroImage;
