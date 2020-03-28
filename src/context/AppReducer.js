import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED,
  MOVIE_DETAILS
} from "../constants/constants";

export const initialState = {
  movies: [],
  heroImg: [],
  movie: {},
  title: "Trending Movies",
  loading: false,
  errorMessage: null
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_REQUEST:
      return { ...state, loading: true, errorMessage: null };

    case MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        heroImg: [state.heroImg, action.payload[18]],
        loading: false,
        errorMessage: null
      };

    case MOVIE_SEARCH_FAILED:
      return { ...state, loading: false, errorMessage: null };

    case MOVIE_DETAILS:
      return {
        ...state,
        loading: false,
        movie: action.payload,
        errorMessage: null
      };

    default:
      return state;
  }
};
