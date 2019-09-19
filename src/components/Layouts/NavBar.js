import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import "../../App.css";

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <h3>MovieDB</h3>
      </Link>
      <ul className="main-nav">
        <li>
          <Link to="/tvshows">TV Shows</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>

        <li>
          <div className="dropdown">
            <div className="dropbtn">More</div>
            <div className="dropdown-content">
              <Link to="/discover"> Discover</Link>
              <Link to="/action">Action</Link>
              <Link to="/tvshows">TV Shows</Link>
            </div>
          </div>
        </li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  a {
    text-decoration: none;
  }

  h3 {
    color: white;
  }

  .main-nav {
    display: flex;

    li {
      list-style: none;
      padding: 0.6rem;
      font-weight: bold;

      a {
        text-decoration: none;
        color: teal;
      }
    }
  }
`;

export default NavBar;
