import React, { useEffect, useReducer } from "react";
import axios from "axios";

import Movie from "./Movie";
import { AppReducer, initialState } from "../context/AppReducer";

import {
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_REQUEST
} from "../constants/constants";
import SearchParams from "./SearchParams";
import { Wrapper } from "../styles/GlobalStyles";
import Spinner from "./Spinner";

const MoviesContainer = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2`;
    axios.get(movieUrl).then(response => {
      dispatch({
        type: MOVIE_SEARCH_SUCCESS,
        payload: response.data.results
      });
    });
  }, []);

  const onSearch = value => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=4be3dca1c64c2fb77f30770cd942a1e2&query=${value}`;
    axios.get(queryUrl).then(response => {
      dispatch({
        type: MOVIE_SEARCH_SUCCESS,
        payload: response.data,
        title: "Searched Results"
      });
      console.log("Search Movies", queryUrl);
    });
  };
  const { movies, loading, errorMessage, title } = state;

  const allMovies =
    movies === undefined || movies.length === 0 ? (
      <Spinner />
    ) : loading && !errorMessage ? (
      <p>{errorMessage}</p>
    ) : (
      movies.map((movie, idx) => <Movie key={idx} {...movie} />)
    );

  console.log(movies);

  return (
    <Wrapper>
      <SearchParams onSearch={onSearch} />
      <h1 className="Movie-title">{title}</h1>
      <div>{allMovies}</div>
    </Wrapper>
  );
};

export default MoviesContainer;
