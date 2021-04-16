import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Movie.module.css';
import noImage from '../../img/no-image-found.png';

const Movie = ({ id, title, poster_path, popularity }) => {
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
      <div className={classes.info}>
        <h3>{title ? title : 'Not available'}</h3>
        <span>{popularity}</span>
      </div>
    </div>
  );
};

export default Movie;
