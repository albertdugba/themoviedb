import React from "react";

const Movie = ({ title, overview }) => {
  return (
    <>
      <h1>Movie :{title}</h1>
      <p>{overview}</p>
    </>
  );
};

export default Movie;
