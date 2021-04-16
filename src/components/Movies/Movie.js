import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Movie.module.css';
import noImage from '../../img/no-image-found.png';

const Movie = ({ id, title, poster_path, release_date, overview }) => {
  return (
    <div className={classes.Movie}>
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
    </div>
  );
};

export default Movie;
