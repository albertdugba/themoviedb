import axios from 'axios';
export const fetchMovies = () =>
  axios
    .get(
      'https://api.themoviedb.org/3/trending/all/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2'
    )
    .then(res => res.data.results);

export const fetchMovieBySearch = query =>
  axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US&page=1&include_adult=false&query=${query}`
  );

export const fetchPopularTvShows = () =>
  axios
    .get(
      'https://api.themoviedb.org/3/tv/popular?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US&page=1'
    )
    .then(res => res.data.results);

export const fetchTopRated = () =>
  axios
    .get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US&page=1'
    )
    .then(res => res.data.results);
