import React, { Component } from "react";
import axios from "axios";

class MovieDetails extends Component {
  state = {
    title: "",
    moviesPage: {}
  };

  componentDidMount() {
    axios
      .get(
        `
      https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=4be3dca1c64c2fb77f30770cd942a1e2&id=384018`
      )
      .then(data => this.setState({ moviesPage: data.data }))
      .catch(error => console.log(error));

    // `https://api.themoviedb.org/3/trending/movie/day?api_key=4be3dca1c64c2fb77f30770cd942a1e2&id=384018`
  }

  render() {
    const { moviesPage } = this.state;
    console.log(moviesPage);

    if (moviesPage === undefined) {
      return <h2>Movie Loading.......</h2>;
    } else {
      return (
        <React.Fragment>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviesPage.backdrop_path}`}
              alt=""
            />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MovieDetails;
