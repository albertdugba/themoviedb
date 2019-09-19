import React, { Component } from "react";
import axios from "axios";

const MovieContext = React.createContext();

export default class MovieProvider extends Component {
  state = {
    movies: [],
    movieApiURL: "https://api.themoviedb.org/3/discover/movie?",
    movieApiDiscover:
      "language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1",
    movieAPiKey: "api_key=4be3dca1c64c2fb77f30770cd942a1e2",
    heroImage: null
  };

  componentDidMount() {
    axios
      .get(
        `${this.state.movieApiURL}${this.state.movieAPiKey}&${this.state.movieApiDiscover}X-RateLimit-Limit: 10`
      )
      .then(res =>
        this.setState({
          movies: res.data.results,
          heroImage: this.state.heroImage || res.data.results[0]
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
