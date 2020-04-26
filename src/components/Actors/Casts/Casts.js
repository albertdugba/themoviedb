import React from "react";
import classes from "./Casts.module.css";
import Spinner from "../../Spinner/Spinner";

import Cast from "../Cast/Cast";

const Casts = props => {
  const { casts } = props;

  const loadedCasts =
    casts.length === 0 ? (
      <Spinner />
    ) : (
      casts.map(cast => <Cast key={cast.credit_id} {...cast} />)
    );

  return <div className={classes.Container}>{loadedCasts}</div>;
};

export default Casts;
