import React from 'react';
import { Link } from 'react-router-dom';
import noImage from '../../img/no_image.jpg';
import classes from './Movie.module.css';

export const IndividualTvShows = ({ poster_path, title, id }) => {
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
            alt={title}
          />
        </Link>
      </div>
    </>
  );
};
