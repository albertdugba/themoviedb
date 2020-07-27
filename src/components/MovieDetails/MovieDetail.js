import React from "react";

import classes from "./MovieDetails.module.css";
import Spinner from "../Spinner/Spinner";
import Trailer from "../Trailer/Trailer";
import defaultBanner from "../../img/defaultBanner.png";

const MovieDetail = ({ movie, trailer }) => {
  const movieDetails =
    Object.keys(movie).length === 0 ? (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Spinner />
      </div>
    ) : (
      <>
        <div
          className={classes.DetailsContainer} //MovieDetailsContainer
          style={{ position: "relative", width: "100vw", height: "100%" }}
        >
          {/* 1 */}
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                : defaultBanner
            }
            alt={movie.title}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
            }}
          />

          {/* 2 */}
          <div>
            <div //moviecard
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8), rgba(0,0,0,0.1))",
                zIndex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "row",
                padding: "1.4rem",
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "26%",
                  margin: "auto",
                  objectFit: "contain",
                  height: "auto",
                  borderRadius: "1rem",
                  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.45)",
                }}
              />
              <div //cardcontent
                className="MovieCardContent"
                style={{
                  flex: "1.2",
                  color: "white",
                  borderRadius: "9px",
                  padding: "1rem",
                  marginLeft: "12px",
                }}
              >
                <h1 style={{ color: "red" }}>{movie.title}</h1>
                <p>
                  Genres:
                  {movie.genres.map(gn => (
                    <li
                      key={gn.id}
                      style={{
                        display: "inline",
                        margin: "4px",
                        padding: "5px",
                        color: "white",
                        background: "red",
                        borderRadius: "10px",
                        height: "20px",
                        fontSize: "10px",
                      }}
                    >
                      {gn.name}
                    </li>
                  ))}
                </p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <p>Released Date:{movie.release_date}</p>
                <p>
                  Prod.Companies:
                  {movie.production_companies.map(p => (
                    <li
                      key={p.id}
                      style={{ display: "inline" }}
                    >{`${p.name}, `}</li>
                  ))}
                </p>
                <p>Status:{movie.status}</p>
                <p>Popularity:{movie.popularity}</p>
                <p>Budget:${movie.budget.toFixed(2)}</p>
                <p>Revenue:${movie.revenue.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* end */}
        </div>

        <div className={classes.DetailsCard}>
          <div>
            <h1
              style={{
                color: "red",
                maxWidth: "1040px",
                margin: "20px auto",
                textAlign: "center",
              }}
            >
              Official Trailer(s)
            </h1>
            <Trailer trailer={trailer} />
          </div>
          {/* Movie Casts */}
          <div>
            <h1
              style={{
                color: "red",
                maxWidth: "1040px",
                margin: "20px auto",
                textAlign: "center",
              }}
            >
              Casts
            </h1>
          </div>
        </div>
      </>
    );

  return <div>{movieDetails}</div>;
};

export default MovieDetail;
