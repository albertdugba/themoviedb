import React from "react";
import { MovieConsumer } from "../../context";
import TrendingMovies from "./TrendingMovies";

import "../../App.css";

const MoviesResult = () => {
  return (
    <MovieConsumer>
      {value => {
        console.log(value);
        const { movies, title } = value;
        if (movies === undefined || movies.length === 0) {
          return <p>Movies Loading...</p>;
        } else {
          return (
            <React.Fragment>
              <div className="movies-container">
                <h1>{title}</h1>
                <div className="movie-grid">
                  {movies.map(movie => (
                    <TrendingMovies {...movie} key={movie.id} />
                  ))}
                </div>
              </div>
            </React.Fragment>
          );
        }
      }}
    </MovieConsumer>
  );
};

export default MoviesResult;
