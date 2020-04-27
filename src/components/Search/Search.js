import React, { useState } from "react";
import classes from "./Search.module.css";

const Search = ({ search }) => {
  const [query, setQuery] = useState("");

  const resetForm = () => {
    setQuery("");
  };

  const onSubmit = event => {
    event.preventDefault();
    search(query);
    resetForm();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="Search for over 2 billion movies"
          value={query}
          onChange={event => setQuery(event.target.value)}
          className={classes.Input}
        />
      </form>
    </div>
  );
};

export default Search;
