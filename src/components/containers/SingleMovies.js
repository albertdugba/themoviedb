import React from 'react';
import Movie from 'components/Movies/Movie';
import { useQueryMovies } from 'hooks/movie-query';

export const SingleMovies = ({ title, className }) => {
  const { movies } = useQueryMovies();
  console.log('single movies', movies);

  return (
    <>
      <span className="movie--title">{title}</span>
      <div className={className}>
        {movies?.map(movie => (
          <Movie {...movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};
