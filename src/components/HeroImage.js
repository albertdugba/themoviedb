import React from "react";

const HeroImage = ({ hero }) => {
  // const heroImage =
  //   hero &&
  //   hero.map((h, idx) => {
  //     return (
  //       <div className="hero-container" key={idx}>
  //         <img
  //           key={idx}
  //           src={`https://image.tmdb.org/t/p/original/${h.backdrop_path}`}
  //           alt={h.title}
  //           style={heroImageStyles}
  //           className="hero-backdrop-img"
  //         />
  //         <p className="hero-text">{h.overview}</p>
  //       </div>
  //     );
  //   });

  return <div>Hero Image</div>;
};

const heroImageStyles = {
  width: "100%",
  height: "60vh"
};

export default HeroImage;
