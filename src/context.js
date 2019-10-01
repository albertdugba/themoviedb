import React, { Component } from "react";
import axios from "axios";

const MovieContext = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return {
        ...state,
        movies: action.payload,
        title: "Searched Results"
      };
    default:
      return state;
  }
};

export class MovieProvider extends Component {
  state = {
    title: "Trending Movies",
    movies: [],
    heroImage: [],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2`
      )
      .then(res =>
        this.setState({
          movies: res.data.results,
          heroImage: res.data.results[0]
        })
      )
      .catch(error => console.log(error));
  }

  render() {
    const { children } = this.props;
    return (
      <MovieContext.Provider value={this.state}>
        {children}
      </MovieContext.Provider>
    );
  }
}

export const MovieConsumer = MovieContext.Consumer;
