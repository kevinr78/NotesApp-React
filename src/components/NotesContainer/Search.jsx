import "./search.css";

import { useState } from "react";

function Search(props) {
  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();
    e.preventDefault();
    props.onSearch(value);
  };
  return (
    <form onSubmit={handleSearch}>
      <div className="search_container">
        <input
          type="text"
          className="search_input"
          placeholder="Search Notes by Title"
          autoComplete="off"
          onChange={handleSearch}
        />
      </div>
    </form>
  );
}

export default Search;
