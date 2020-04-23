import React, { useReducer, useEffect } from "react";
import axios from "axios";

import Spinner from "../Spinner";
import { AppReducer, initialState } from "../../context/AppReducer";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_DETAILS,
  MOVIE_SEARCH_FAILED,
} from "../../constants/constants";

import classes from "./MovieDetails.module.css";

const MovieDetails = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const movieUrl = `https://api.themoviedb.org/3/movie/${props.match.params.movieId}?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US`;
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

  const { movie } = state;

  const movieDetails =
    Object.keys(movie).length === 0 ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Spinner />
      </div>
    ) : (
      <div className={classes.DetailsContainer}>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          style={{ width: "100%", height: "auto" }}
        />
        {/* <div className={classes.MovieSecondary}>
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt=""
<<<<<<< HEAD:src/components/MovieDetails.js
            style={{
              width: "400px",
              height: "100%",
            }}
=======
>>>>>>> movie-cat-feature:src/components/MovieDetails/MovieDetails.js
          />
          <div>
            <h3 style={{ color: "red" }}>{movie.title}</h3>
            <p>{movie.overview}</p>
            <p>Released Date:{movie.release_date}</p>
            <p>Popularity:{movie.popularity}</p>
            <p>Budget:{movie.budget}</p>
            <p>HomePage:{movie.homepage}</p>
            <p>Status:{movie.status}</p>
            <p>
              Prod.Companies:
              {movie.production_companies.map(p => (
                <li style={{ display: "inline" }}>{`${p.name}, `}</li>
              ))}
            </p>
          </div>
        </div> */}
      </div>
    );

  return <div>{movieDetails}</div>;
};

export default MovieDetails;
