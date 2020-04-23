import React, { useReducer, useEffect } from "react";
import axios from "axios";

import Spinner from "./Spinner";
import { AppReducer, initialState } from "../context/AppReducer";
import { MOVIE_SEARCH_REQUEST, MOVIE_DETAILS } from "../constants/constants";

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
      .then(error => console.log(error));
  }, [movieUrl]);

  const { movie } = state;
  console.log(movie);

  const movieDetails =
    Object.keys(movie).length === 0 ? (
      <Spinner />
    ) : (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="img-details-bg"
        />
        <div className="image-backdrop">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            style={{
              width: "400px",
              height: "100%",
            }}
          />
          <div className="movie-details">
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
                <li style={{ display: "inline" }}>{`${p.name} , `}</li>
              ))}
            </p>
          </div>
        </div>
      </div>
    );

  return <div>{movieDetails}</div>;
};

export default MovieDetails;
