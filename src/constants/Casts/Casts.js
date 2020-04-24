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
        <div className={classes.Actor}>
          <img
            src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
            alt={cast.character}
            style={{
              width: "90%",
              height: "auto",
              //   paddingTop: "10px",
            }}
          />
          <p className={classes.Name}>{cast.name}</p>
          <p className={classes.Character}>as {cast.character}</p>
        </div>
      ))
    );
  return <div className={classes.Container}>{loadedCasts}</div>;
};

export default Casts;
