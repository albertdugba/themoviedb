import React from "react";
import { FaFilm } from "react-icons/fa";
import Search from "./Search";

const Header = () => {
  return (
    <header>
      <FaFilm />
      <Search />
    </header>
  );
};

export default Header;
