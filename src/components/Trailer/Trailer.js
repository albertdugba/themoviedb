import React from "react";

import classes from "./Trailer.module.css";
import Spinner from "../Spinner/Spinner";

const Trailer = ({ trailer }) => {
  const { videos } = trailer;
  const movieTrailer =
    videos === null || videos === undefined ? (
      <Spinner />
    ) : (
      videos.results.map(movieTrail => {
        return (
          <div key={movieTrail.id}>
            <iframe
              src={`https://www.youtube.com/embed/${movieTrail.key}`}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="video"
              width="100%"
              height="auto"
            />
          </div>
        );
      })
    );

  return <div className={classes.Trailer}>{movieTrailer}</div>;
};

export default Trailer;
