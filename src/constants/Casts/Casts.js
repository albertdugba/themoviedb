import React, { useEffect } from "react";
import classes from "./Casts.module.css";
import Spinner from "../../components/Spinner/Spinner";

import noAvatar from "../../img/no_image.jpg";
import { withRouter, Link } from "react-router-dom";
// `https://image.tmdb.org/t/p/original/${cast.profile_path}`;

const Casts = props => {
  const { casts } = props;
  console.log(casts);
  const loadedCasts =
    casts.length === 0 ? (
      <Spinner />
    ) : (
      props.casts.map(cast => (
        <Link to={`/cast-profile/${cast.id}`} key={cast.id}>
          <div className={classes.Actor}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                  : noAvatar
              }
              alt={cast.character}
              style={{
                width: "100%",
                height: "auto",
                //   paddingTop: "10px",
              }}
            />
            <p className={classes.Name}>{cast.name}</p>
            <p className={classes.Character}>as {cast.character}</p>
          </div>
        </Link>
      ))
    );
  return <div className={classes.Container}>{loadedCasts}</div>;
};

export default withRouter(Casts);
