import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED,
  MOVIE_DETAILS,
  MOVIE_CASTS,
  SEARCH_NOT_FOUND,
} from "../constants/constants";

export const initialState = {
  movies: [],
  trailer: null,
  heroImg: null,
  cast: {},
  movie: {},
  casts: [],
  title: "Trending Movies",
  loading: false,
  errorMessage: null,
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_REQUEST:
      return { ...state, loading: true, errorMessage: null };

    case MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        heroImg: action.payload[9],
        loading: false,
        errorMessage: null,
      };

    case MOVIE_CASTS:
      return {
        ...state,
        loading: false,
        casts: action.payload,
      };

    case MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        trailer: action.payload,
        cast: action.payload,
        errorMessage: null,
      };

    case SEARCH_NOT_FOUND:
      return { ...state, loading: false };

    case MOVIE_SEARCH_FAILED:
      return { ...state, loading: false, errorMessage: null };

    default:
      return state;
  }
};
