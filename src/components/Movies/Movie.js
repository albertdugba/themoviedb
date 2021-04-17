import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Movie.module.css';
import noImage from '../../img/no-image-found.png';
import Modal from 'components/UI/Modal';

const Movie = ({ id, title, poster_path }) => {
  const [toggleMovie, setToggleMovie] = useState(true);
  console.log(toggleMovie);
  return (
    <>
      {toggleMovie && (
        <Modal>
          <div className={classes.Movie}>
            <Link to={`/movie/title/${id}`}>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                    : noImage
                }
                alt={title}
              />
            </Link>
            <div className={classes.info}>
              <h3>{title ? title : 'Not available'}</h3>
              <button onClick={() => setToggleMovie(true)}>View Details</button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Movie;
