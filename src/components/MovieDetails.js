import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { AppReducer, initialState } from "../context/AppReducer";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS
} from "../constants/constants";

const MovieDetails = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const movieUrl = `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US`;

  useEffect(() => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    axios
      .get(movieUrl)
      .then(response => {
        dispatch({
          type: MOVIE_SEARCH_SUCCESS,
          payload: response.data.results
        });
      })
      .catch(error => console.log(error));
  }, [movieUrl]);

  const { movies } = state;
  console.log("MovieDetails", movies);

  return <div>MovieDetails Component</div>;
};

export default MovieDetails;
