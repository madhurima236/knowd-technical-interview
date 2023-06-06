import React, { useState } from "react";

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
      <input
        className="w-2/3 h-10 px-3 text-base placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
