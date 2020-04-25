import React, { useEffect } from "react";
import axios from "axios";

const CastProfile = props => {
  useEffect(() => {
    const url = axios.get(
      `https://api.themoviedb.org/3/person/${props.match.params.id}?api_key=4be3dca1c64c2fb77f30770cd942a1e2&language=en-US`,
    );
    console.log(url);
  });
  return <div>qWAEDSFSA</div>;
};

export default CastProfile;
