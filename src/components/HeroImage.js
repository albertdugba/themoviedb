import React from "react";

const HeroImage = ({ hero }) => {
  const heroImage =
    hero &&
    hero.map((h, idx) => {
      return (
        <div>
          <img
            key={idx}
            src={`https://image.tmdb.org/t/p/w500/${h.poster_path}`}
            alt={h.title}
            style={heroImageStyles}
          />
          <h1>{h.title}</h1>
        </div>
      );
    });

  return <div>{heroImage}</div>;
};

const heroImageStyles = {
  width: "100%",
  height: "100vh"
};

export default HeroImage;
