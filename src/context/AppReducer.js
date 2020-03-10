import {
  MOVIE_SEARCH_REQUEST,
  MOVIE_SEARCH_SUCCESS,
  MOVIE_SEARCH_FAILED
} from "../constants/constants";

export const initialState = {
  movies: [],
  heroImage: [],
  title: "Trending Movies",
  loading: false,
  errorMessgae: null
};

export const AppReducer = (state, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_REQUEST:
      return { ...state, loading: true, errorMessgae: null };

    case MOVIE_SEARCH_SUCCESS:
      return {
        ...state,
        movies: [...state.movies, action.payload],
        heroImage: [...state.heroImage, action.payload[0]],
        loading: false,
        errorMessgae: null
      };

    case MOVIE_SEARCH_FAILED:
      return { ...state, loading: false, errorMessgae: action.error };

    default:
      return state;
  }
};
