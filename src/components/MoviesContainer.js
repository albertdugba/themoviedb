import React, { useEffect, useReducer } from "react";
import axios from "axios";

import Movie from "./Movie";
import HeroImage from "./HeroImage";
import Search from "./Search";
import Spinner from "./Spinner";
import { AppReducer, initialState } from "../context/AppReducer";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED
} from "../constants/constants";
// import HeroImage from "./HeroImage";

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
          payload: response.data.results
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
          payload: response.data.results
        });
      })
      .then(error => {
        dispatch({ type: MOVIE_SEARCH_FAILED, error: error });
      });
    console.log(queryUrl);
  };
  const { movies, loading, errorMessage, heroImg, title } = state;
  console.log(movies);

  const loadedData =
    movies === undefined ||
    movies.length === 0 ||
    loading ||
    Object.keys(movies).length === 0 ? (
      <Spinner />
    ) : errorMessage ? (
      <p>{errorMessage}</p>
    ) : (
      movies.map(movie => (
        <div key={movie.id}>
          {/* <HeroImage hero={heroImg} /> */}

          <Movie {...movie} />
        </div>
      ))
    );

  return (
    <div className="container">
      <div className="container-inner">
        <div className="hero">
          <Search search={onSearchQuery} />
        </div>
      </div>
      <h1>{title}</h1>
      <div className="images-list">{loadedData}</div>
    </div>
  );
};

export default MoviesContainer;
