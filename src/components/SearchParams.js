import React, { useState } from "react";

const SearchParams = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const onSubmit = evt => {
    evt.preventDefault();
    onSearch(value);
    resetForm();
  };

  const resetForm = () => {
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search for over 2 billion movies here..."
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
    </form>
  );
};

export default SearchParams;
