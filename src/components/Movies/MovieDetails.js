import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaMoneyBill, FaClock, FaHome, FaArrowRight } from "react-icons/fa";

import "../../App.css";
import Spinner from "../Spinner";

class MovieDetails extends Component {
  state = {
    title: "",
    moviesPage: {},
    casts: {}
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
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${moviesPage.backdrop_path}`}
              alt=""
              className="img-backdrop"
            />
          </div>

          <div className="single-movie-children">
            <div className="detailed-container">
              <img
                src={`https://image.tmdb.org/t/p/w500/${moviesPage.poster_path}`}
                alt={moviesPage.title}
                className="paddings"
              />
              <div className="paddings">
                <div className="movies-cont">
                  <h1>Title: {moviesPage.title}</h1>
                  <strong>Released Date: {moviesPage.release_date}</strong>
                  <p> Overview: {moviesPage.overview}</p>
                  <span>
                    <FaClock /> Runtime: {moviesPage.runtime}
                  </span>
                  <p>
                    <FaMoneyBill /> Budget: ${moviesPage.budget}
                  </p>
                  <p>Status: {moviesPage.status}</p>
                  <p>
                    <FaMoneyBill /> Revenue: {moviesPage.revenue}
                  </p>
                  <p>
                    <Link to={moviesPage.homepage} target="_" className="link">
                      <FaHome /> Visit movie homepage <FaArrowRight />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default MovieDetails;
