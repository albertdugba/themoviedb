import { IndividualTopRated } from 'components/Movies/IndividualTopRated';
import { useTopRated } from 'hooks/movie-query';
import React from 'react';

export const TopRated = ({ className, title }) => {
  const { topRated, isLoading, isError, error } = useTopRated();
  console.log('Top Rated', topRated);
  return (
    <>
      <span className="movie--title">{title}</span>
      <div className={className}>
        {topRated?.map(top => (
          <IndividualTopRated {...top} key={top.id} />
        ))}
      </div>
    </>
  );
};
