import React from "react";
import { Link } from "react-router-dom";

import classes from "./Movie.module.css";
import noImage from "../../img/no-image-found.png";

const Movie = ({ id, title, poster_path, release_date, overview }) => {
  const truncateWords = (str, len) =>
    str.substring(0, (str + " ").lastIndexOf(" ", len));

  return (
    <div className={classes.ImageContainer}>
      <Link to={`/movie/title/${id}`}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : noImage
          }
          alt={title}
        />
      </Link>

      <div className={classes.MovieBio}>
        <h4>{title}</h4>
        <span>{release_date}</span>
        <p>{truncateWords(overview, 35)}...</p>
      </div>
    </div>
  );
};

export default Movie;
