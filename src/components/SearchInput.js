import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      placeholder="Search for anything..."
      type="text"
      autoCapitalize="false"
      autoComplete="false"
      spellCheck="false"
      autoFocus
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchInput;