import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED
} from "../constants/constants";

export const initialState = {
  movies: [],
  heroImg: [],
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

    case "MOVIE_DETAILS":
      return {
        ...state,
        loading: true,
        errorMessage: null,
        movies: action.payload
      };

    default:
      return state;
  }
};
