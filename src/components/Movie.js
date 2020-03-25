import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ title, backdrop, poster_path }) => {
  return (
    <Link to="/movie-details">
      <div className="image-overlay">
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            poster_path === null || undefined
              ? "kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
              : poster_path
          }`}
          alt={title}
          className="movie-img"
        />
        <div className="middle">
          <p className="image-text">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
