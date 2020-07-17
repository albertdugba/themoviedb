import React from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";

const Movie = ({ id, title, poster_path }) => {
  return (
    <div className={classes.ImageContainer}>
      <Link to={`/movie/title/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            poster_path === null || undefined
              ? "kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
              : poster_path
          }`}
          alt={title}
          style={{ width: "100%", margin: "auto" }}
        />
      </Link>
    </div>
  );
};

export default Movie;
