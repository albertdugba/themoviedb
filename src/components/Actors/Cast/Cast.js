import React from "react";
import { Link, withRouter } from "react-router-dom";

import classes from "./Cast.module.css";
import noAvatar from "../../../img/no_image.jpg";

const Cast = ({ profile_path, character, name, id }) => {
  return (
    <Link to={`/movie/cast/${id}`}>
      <div className={classes.Actor}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original/${profile_path}`
              : noAvatar
          }
          alt={character}
        />
        <p className={classes.Name}>{name}</p>
        <p className={classes.Character}>as {character}</p>
      </div>
    </Link>
  );
};

export default withRouter(Cast);
