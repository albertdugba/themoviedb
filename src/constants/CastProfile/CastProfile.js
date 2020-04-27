import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { AppReducer, initialState } from "../../../../context/AppReducer";
import Spinner from "../../../Spinner/Spinner";
import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_FAILED,
  MOVIE_DETAILS,
} from "../../../../constants/constants";

import classes from "./CastProfile.module.css";

const MAX_ITEMS = 40;

const CastProfile = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch({ type: MOVIE_SEARCH_REQUEST });
    axios
      .get(
        `https://api.themoviedb.org/3/person/${props.match.params.castId}?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US`,
      )
      .then(response => {
        dispatch({ type: MOVIE_DETAILS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: MOVIE_SEARCH_FAILED, error: error });
      });
  }, [props]);

  const { cast } = state;

  const transformedItem = String(cast.biography).trim().split();

  const toggleBtn = () => {
    setShow(!show);
  };

  const renderToggledItems = () => {
    if (show) {
      return transformedItem;
    }

    return transformedItem.slice(0, MAX_ITEMS);
  };

  let loadedCastProfile =
    cast === undefined || cast === null ? (
      <Spinner />
    ) : (
      <div className={classes.ProfileContainer}>
        <div className={classes.ProfileImage}>
          <img
            src={` https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
            alt=""
          />
        </div>
        <div className={classes.ProfileDetails}>
          <h4>Name:{cast.name}</h4>
          <span>Biography</span>

          {renderToggledItems().map((item, idx) => (
            <div key={idx}>
              <p>{item}</p>
              <button onClick={toggleBtn}>{show ? "less" : "more"}</button>
            </div>
          ))}

          <p>Known for :{cast.known_for_department}</p>
          <p>Birthday:{cast.birthday}</p>
          <p>Place of Birth:{cast.place_of_birth}</p>
        </div>
      </div>
    );

  return <div>{loadedCastProfile}</div>;
};

export default CastProfile;
