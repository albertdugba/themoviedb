import React from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";

const Movie = ({ id, title, backdrop, poster_path }) => {
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
          className="movie-img"
          style={{ width: "60%" }}
        />
      </Link>
    </div>
  );
};

export default Movie;
