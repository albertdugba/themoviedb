import React, { useReducer, useEffect, Fragment } from "react";
import axios from "axios";

import { AppReducer, initialState } from "../../context/AppReducer";

import Casts from "../Actors/Casts/Casts";

import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_DETAILS,
  MOVIE_SEARCH_FAILED,
  MOVIE_CASTS,
} from "../../constants/constants";
import MovieDetail from "./MovieDetail";

const MovieDetails = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const movieUrl = `https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=4be3dca1c64c2fb77f30770cd942a1e2&append_to_response=videos,images`;

  useEffect(() => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    axios
      .get(movieUrl)
      .then(response => {
        dispatch({ type: MOVIE_DETAILS, payload: response.data });
      })
      .then(error => {
        dispatch({ type: MOVIE_SEARCH_FAILED, error: error });
      });
  }, [movieUrl]);

  useEffect(() => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    axios
      .get(
        `
    https://api.themoviedb.org/3/movie/${props.match.params.movieId}/credits?api_key=4be3dca1c64c2fb77f30770cd942a1e2`,
      )
      .then(response => {
        dispatch({ type: MOVIE_CASTS, payload: response.data.cast });
      });
  }, [props]);

  const { movie, casts, trailer } = state;

  return (
    <Fragment>
      <MovieDetail movie={movie} trailer={trailer} />
      <Casts casts={casts} />
    </Fragment>
  );
};

export default MovieDetails;
