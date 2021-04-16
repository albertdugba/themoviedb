import { IndividualTvShows } from 'components/Movies/IndividualTvShow';
import { usePopularTvShows } from 'hooks/movie-query';
import React from 'react';

export const PopularTvShows = ({ title, className }) => {
  const { popularTvShows, isLoading, isError, error } = usePopularTvShows();
  console.log(popularTvShows);
  return (
    <>
      <h1 className="movie--title">{title}</h1>
      <div className={className}>
        {popularTvShows?.map(tvShows => (
          <IndividualTvShows {...tvShows} key={tvShows.id} />
        ))}
      </div>
    </>
  );
};
