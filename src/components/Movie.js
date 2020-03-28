import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, title, backdrop, poster_path }) => {
  return (
    <div className="image-overlay">
      <Link to={`/movie/title/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${
            poster_path === null || undefined
              ? "kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
              : poster_path
          }`}
          alt={title}
          className="movie-img"
        />
      </Link>
      <div className="middle">
        <p className="image-text">{title}</p>
      </div>
    </div>
  );
};

export default Movie;
