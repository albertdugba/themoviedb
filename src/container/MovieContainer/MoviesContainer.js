import React from 'react';
import classes from './MovieContainer.module.css';
import { SingleMovies } from 'components/containers/SingleMovies';
import { PopularTvShows } from 'components/containers/PopularTvShows';

const MoviesContainer = () => {
  return (
    <>
      <SingleMovies title="Trending Movies" className={classes.MovieList} />
      <PopularTvShows title="Popular Tv Shows" className={classes.MovieList} />
    </>
  );
};

export default MoviesContainer;
