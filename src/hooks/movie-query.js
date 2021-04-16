import { useQuery } from 'react-query';
import {
  fetchMovieBySearch,
  fetchMovies,
  fetchPopularTvShows,
  fetchTopRated,
} from 'service/api-endpoint';

export const useQueryMovies = () => {
  const result = useQuery('movies', fetchMovies);
  return { ...result, movies: result.data };
};

export const useSearchMovies = query => {
  const result = useQuery('movieSearch', fetchMovieBySearch(query));
  return { ...result, queriedMovie: result.data };
};

export const usePopularTvShows = () => {
  const result = useQuery('popularTvShows', fetchPopularTvShows);
  return { ...result, popularTvShows: result.data };
};

export const useTopRated = () => {
  const result = useQuery('topRated', fetchTopRated);
  return { ...result, topRated: result.data };
};

export const useMovieRecommendations = () => {};

export const useDiscoverTvShows = () => {};
