import React from "react";
import styled from "styled-components";

import "../../App.css";

const Discover = ({
  original_title,
  overview,
  release_date,
  vote_count,
  backdrop_path,
  poster_path
}) => {
  return (
    <div>
      <div className="card ml-5">
        <div className="card-text p4 movie-four display">
          <div>
            <h2>{original_title}</h2>
            <p>{overview}</p>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w200/${poster_path}`}
            alt="The MovieDB "
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
