import React, { useEffect, useReducer } from "react";
import axios from "axios";

import Movie from "../../components/Movies/Movie";
// import Search from "../../components/Search/Search";

import Spinner from "../../components/Spinner/Spinner";
import { AppReducer, initialState } from "../../context/AppReducer";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED,
} from "../../constants/constants";

import classes from "./MovieContainer.module.css";
import HeroImage from "../../components/HeroImage/HeroImage";
import Search from "@components/Search/Search";

const MoviesContainer = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    const movieBaseUrl =
      "https://api.themoviedb.org/3/trending/all/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2";
    axios
      .get(movieBaseUrl)
      .then(response => {
        dispatch({
          type: MOVIE_SEARCH_SUCCESS,
          payload: response.data.results,
        });
      })
      .then(error => {
        dispatch({ type: MOVIE_SEARCH_FAILED, error: error });
      });
  }, []);

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
  const { movies, loading, errorMessage, title } = state;

  const loadedData =
    movies === undefined ||
    movies.length === 0 ||
    loading ||
    Object.keys(movies).length === 0 ? (
      <Spinner />
    ) : errorMessage ? (
      <p>{errorMessage}</p>
    ) : (
      movies.map(movie => <Movie {...movie} key={movie.id} />)
    );

  return (
    <div>
      <header>
        <div>
          <HeroImage hero={state} />
          <Search search={onSearchQuery} />
          {!loading && movies.length === 0 && (
            <h4 style={{ textAlign: "center" }}>
              Oops!, It seems like there is no movie by that{" "}
              <strong style={{ color: "red" }}>name. </strong>Please try a
              different <strong style={{ color: "red" }}>term</strong>{" "}
            </h4>
          )}
        </div>
      </header>

      <main className={classes.MovieListContainer}>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <div className={classes.MovieList}>{loadedData}</div>
      </main>
    </div>
  );
};

export default MoviesContainer;
