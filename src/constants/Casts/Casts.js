import React from "react";
import classes from "./Casts.module.css";
import Spinner from "../../components/Spinner/Spinner";

import Cast from "./Cast";

const Casts = props => {
  const { casts } = props;

  const loadedCasts =
    casts.length === 0 ? (
      <Spinner />
    ) : (
      props.casts.map(cast => <Cast key={cast.cast_id} {...cast} />)
    );

  return <div className={classes.Container}>{loadedCasts}</div>;
};

export default Casts;
