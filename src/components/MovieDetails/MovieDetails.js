import React, { useReducer, useEffect } from "react";
import axios from "axios";

import Spinner from "../Spinner/Spinner";
import { AppReducer, initialState } from "../../context/AppReducer";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_DETAILS,
  MOVIE_SEARCH_FAILED,
  MOVIE_CASTS,
} from "../../constants/constants";

import classes from "./MovieDetails.module.css";
import Casts from "../../constants/Casts/Casts";
import Trailer from "../Trailer/Trailer";

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
  }, [props.match.params.movieId]);

  const { movie, casts, trailer } = state;

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

        <div className={classes.DetailsCard}>
          <h1 style={{ color: "red" }}>{movie.title}</h1>
          <p>{movie.overview}</p>
          <p>Released Date:{movie.release_date}</p>
          <p>Popularity:{movie.popularity}</p>
          <p>Budget:${movie.budget.toFixed(2)}</p>
          <p>Revenue:${movie.revenue.toFixed(2)}</p>
          <p>Status:{movie.status}</p>
          <p>
            Prod.Companies:
            {movie.production_companies.map(p => (
              <li key={p.id} style={{ display: "inline" }}>{`${p.name}, `}</li>
            ))}
          </p>

          <p>
            Genres:
            {movie.genres.map(gn => (
              <li
                key={gn.id}
                style={{
                  display: "inline",
                  margin: "4px",
                  padding: "5px",
                  color: "white",
                  background: "red",
                  borderRadius: "10px",
                  height: "20px",
                  fontSize: "10px",
                }}
              >
                {gn.name}
              </li>
            ))}
          </p>
        </div>
        <Trailer trailer={trailer} />

        {/* Movie Casts */}
        <div>
          <h1 style={{ color: "red", maxWidth: "1040px", margin: "20px auto" }}>
            Casts
          </h1>
          <Casts casts={casts} />
        </div>
      </div>
    );

  return <div>{movieDetails}</div>;
};

export default MovieDetails;
