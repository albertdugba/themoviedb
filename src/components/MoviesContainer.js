import React, { useEffect, useReducer } from "react";
import axios from "axios";

import { FaFilm } from "react-icons/fa";

import Movie from "./Movie";
import Search from "./Search";
import Spinner from "./Spinner";
import { AppReducer, initialState } from "../context/AppReducer";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED
} from "../constants/constants";
import SideBar from "./SideBar";

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
  const { movies, loading, errorMessage, title } = state;
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
          <Movie {...movie} />
        </div>
      ))
    );

  return (
    <div className="Movie-container">
      <header className="Movie-header">
        <div className="Movie-header__content">
          <Search search={onSearchQuery} />
          <FaFilm color={"red"} />
        </div>
      </header>
      <main className="Movie__banner">Banner goes here...</main>
      <aside className="sidebar">
        <SideBar />
      </aside>
      <main className="Movie__list-items">
        <h1>{title}</h1>
        <div className="Movie__list-items-img">{loadedData}</div>
      </main>
    </div>
  );
};

export default MoviesContainer;
