import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED,
  MOVIE_DETAILS,
  MOVIE_CASTS,
} from "../constants/constants";

export const initialState = {
  movies: [],
  heroImg: null,
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
        heroImg: action.payload[7],
        loading: false,
        errorMessage: null,
      };

    case MOVIE_CASTS:
      return {
        ...state,
        loading: false,
        casts: action.payload,
      };

    case MOVIE_SEARCH_FAILED:
      return { ...state, loading: false, errorMessage: null };

    case MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        errorMessage: null,
      };

    default:
      return state;
  }
};
