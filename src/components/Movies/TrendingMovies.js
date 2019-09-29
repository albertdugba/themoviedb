import React from "react";
import { Link } from "react-router-dom";

const TrendingMovies = ({ title, vote_count, popularity, poster_path, id }) => {
  return (
    <div className="movie-grid">
      <Link to={`movie/title/${id}`}>
        <div className="cad">
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title}
            className="card-img-top"
          />

          {/* <div className="list-group">
            <p className="list-group-item">
              <strong>Title: </strong>
              {title}}
            </p>
            <p className="list-group-item">
              <strong>Poularity: </strong>
              {popularity}}
            </p>

          </div> */}
          <button className="btn btn-success btn-block">View Movie</button>
        </div>
      </Link>
    </div>
  );
};

export default TrendingMovies;
