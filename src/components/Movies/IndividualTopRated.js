import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../img/no_image.jpg';
import classes from './Movie.module.css';

export const IndividualTopRated = ({ poster_path, name, id }) => {
  return (
    <>
      <div className={classes.Movie}>
        <Link to={`/movie/title/${id}`}>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : noImage
            }
            alt={name}
          />
        </Link>
        <div className={classes.info}>
          <h3>{name ? name : 'Not available'}</h3>
          <button>View Details</button>
        </div>
      </div>
    </>
  );
};
