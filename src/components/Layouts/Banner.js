import React from "react";
import styled from "styled-components";
import { MovieConsumer } from "../context";
import Discover from "./Discover";

const Banner = () => {
  return (
    <MovieConsumer>
      {value => {
        const { movies } = value;
        console.log(movies);
        if (movies === undefined || movies.length === 0) {
          return <p>movies loading...</p>;
        } else {
          return (
            <React.Fragment>
              <MovieContainer className="container mt-5 movie-container">
                {movies.map(discover => (
                  <Discover {...discover} key={discover.id} />
                ))}
              </MovieContainer>
            </React.Fragment>
          );
        }
      }}
    </MovieConsumer>
  );
};

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
`;

export default Banner;
