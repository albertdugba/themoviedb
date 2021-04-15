import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import Movie from '../../components/Movies/Movie';
// import Search from "../../components/Search/Search";

import Spinner from '../../components/Spinner/Spinner';
import { AppReducer, initialState } from '../../context/AppReducer';
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED,
} from '../../constants/constants';

import classes from './MovieContainer.module.css';
import HeroImage from '../../components/HeroImage/HeroImage';
import Search from 'components/Search/Search';
import { useQueryMovies, useSearchMovies } from 'hooks/movie-query';

const MoviesContainer = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { movies } = useQueryMovies();

  const onSearchQuery = query => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });

    const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US&page=1&include_adult=false&query=${query}`;
    axios
      .get(queryUrl)
      .then(response => {
        dispatch({
          type: MOVIE_SEARCH_SUCCESS,
          payload: response.data.results,
        });
      })
      .then(error => {
        dispatch({ type: MOVIE_SEARCH_FAILED, error: error });
      });
  };

  return (
    <div>
      <header>
        <div>
          <HeroImage hero={state} />
          <Search search={onSearchQuery} />
        </div>
      </header>

      <main className={classes.MovieListContainer}>
        <div className={classes.MovieList}>
          {movies?.map(movie => (
            <Movie {...movie} key={movie.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default MoviesContainer;
