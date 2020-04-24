import React from "react";
import classes from "./Casts.module.css";
import Spinner from "../../components/Spinner";

const Casts = ({ casts }) => {
  console.log("casts", casts);
  const loadedCasts =
    casts.length === 0 ? (
      <Spinner />
    ) : (
      casts.map(cast => (
        <div className={classes.Row}>
          <div className={classes.Column}>
            <div className={classes.Card}>
              <img
                src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
                alt={cast.character}
                style={{ width: "150px", height: "auto", paddingTop: "10px" }}
              />
              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </div>
          </div>
        </div>
      ))
    );
  return <div>{loadedCasts}</div>;
};

export default Casts;
