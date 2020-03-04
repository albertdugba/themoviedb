import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";

const TrendingMovies = ({ title, poster_path, id }) => {
  return (
    <div className="movie-grid">
      <Link to={`/movie/title/${id}`}>
        <div className="cad">
          <img
            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
            alt={title}
            className="card-img-top"
          />

          <button className="btn  btn-block blue-btn">View Movie</button>
        </div>
      </Link>
    </div>
  );
};

export default TrendingMovies;
