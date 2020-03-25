import React, { useState } from "react";

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
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for over 2 billion movies"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
    </form>
  );
};

export default Search;
