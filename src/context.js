import React, { Component } from "react";
import axios from "axios";

const MovieContext = React.createContext();

export class MovieProvider extends Component {
  state = {
    title: "Trending Movies",
    movies: [],
    moviesLength: 15
  };

  componentDidMount() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2`
      )
      .then(res => this.setState({ movies: res.data.results }))
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
