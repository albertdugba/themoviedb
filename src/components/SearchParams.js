import React, { Component } from "react";
import axios from "axios";

import "../App.css";
import { MovieConsumer } from "../context";

class SearchParams extends Component {
  state = {
    movieTitle: ""
  };

  handleOnChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSearchMovie = (dispatch, e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=4be3dca1c64c2fb77f30770cd942a1e2&query=${this.state.movieTitle}`
      )
      .then(res => {
        console.log(res.data);
        dispatch({
          type: "SEARCH_MOVIE",
          payload: res.data.results
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { movieTitle } = this.state;

    return (
      <MovieConsumer>
        {value => {
          const { dispatch } = value;

          return (
            <form onSubmit={this.handleSearchMovie.bind(this, dispatch)}>
              <input
                name="movieTitle"
                type="text"
                placeholder="Search for a movie"
                value={movieTitle}
                onChange={this.handleOnChange}
              />
            </form>
          );
        }}
      </MovieConsumer>
    );
  }
}

export default SearchParams;
