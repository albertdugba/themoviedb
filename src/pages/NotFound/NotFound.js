import React from "react";
import { FaHome } from "react-icons/fa";

import errorPage from "../../img/404.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "10px auto",
      }}
    >
      <img src={errorPage} alt="Error-404" style={{ width: "100%" }} />
      <p>
        <Link to="/">
          <FaHome size={50} />
        </Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
