import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Movie from "./Movie";
import { AppReducer, initialState } from "../context/AppReducer";
import {
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_REQUEST
} from "../constants/constants";
import SearchParams from "./SearchParams";

const MoviesContainer = () => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    const movieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2`;
    axios.get(movieUrl).then(response => {
      dispatch({
        type: MOVIE_SEARCH_SUCCESS,
        payload: response.data.results
      });
      //   console.log(response.data);
    });
  }, []);

  const onSearch = value => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key=4be3dca1c64c2fb77f30770cd942a1e2&query=${value}`;
    axios.get(queryUrl).then(response => {
      dispatch({ type: MOVIE_SEARCH_SUCCESS, payload: response.data });
      console.log("Search Movies", response.data.results);
    });
  };
  const { movies, loading, errorMessage } = state;
  const allMovies =
    loading && !errorMessage && movies.length === 0 ? (
      <p>loading....</p>
    ) : (
      movies.map(movie => <Movie {...movie} key={movie.id} />)
    );

  console.log(allMovies, "ehh");

  return (
    <div>
      <SearchParams onSearch={onSearch} />
      <div>{allMovies}</div>
    </div>
  );
};

export default MoviesContainer;
