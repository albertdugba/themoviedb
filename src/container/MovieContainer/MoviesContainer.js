import React from 'react';
import classes from './MovieContainer.module.css';
import { SingleMovies } from 'components/containers/SingleMovies';
import { PopularTvShows } from 'components/containers/PopularTvShows';
import { TopRated } from 'components/containers/TopRated';

const MoviesContainer = () => {
  return (
    <>
      <SingleMovies title="Trending Movies" className={classes.MovieList} />
      <PopularTvShows title="Popular Tv Shows" className={classes.MovieList} />
      <TopRated title="Top Rated" className={classes.MovieList} />
    </>
  );
};

export default MoviesContainer;
