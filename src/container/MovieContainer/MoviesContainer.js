import React from 'react';
import classes from './MovieContainer.module.css';
import { SingleMovies } from 'components/containers/SingleMovies';

const MoviesContainer = () => {
  return (
    <>
      <SingleMovies title="Trending Movies" className={classes.MovieList} />
    </>
  );
};

export default MoviesContainer;
