import React, { Component } from "react";
import axios from "axios";

import "../../App.css";

class MovieDetails extends Component {
  state = {
    title: "",
    moviesPage: {}
  };

  componentDidMount() {
    axios
      .get(
        `
      https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=4be3dca1c64c2fb77f30770cd942a1e2`
      )
      .then(data => this.setState({ moviesPage: data.data }))
      .catch(error => console.log(error));
  }

  render() {
    const { moviesPage } = this.state;
    console.log(moviesPage);

    if (moviesPage === undefined || Object.keys(moviesPage).length === 0) {
      return <h2>Movie Loading.......</h2>;
    } else {
      return (
        <React.Fragment>
          <div className="container"></div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviesPage.backdrop_path}`}
              alt=""
              className="img-backdrop"
            />
          </div>

          <div className="single-movie-children">
            <img
              src={`https://image.tmdb.org/t/p/w500/${moviesPage.poster_path}`}
              alt={moviesPage.title}
              className="paddings"
            />
            <div className="single-movie-subchildren paddings">
              <h1>{moviesPage.title}</h1>
              <p>{moviesPage.release_date}</p>
              <p>{moviesPage.overview}</p>
              <span>{moviesPage.runtime}</span>
              <p>{moviesPage.budget}</p>
              <p>
                <a href={moviesPage.homepage} target="_">
                  Homepage
                </a>
              </p>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MovieDetails;
