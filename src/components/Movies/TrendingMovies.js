import React from "react";

const TrendingMovies = ({ title, vote_count, popularity, poster_path }) => {
  return (
    <div className="movie-grid">
      <div className="cad">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          className="card-img-top"
        />

        <div className="card-bod">
          <p className="card-tite card-p">
            <strong>Title: </strong>
            {title}}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
