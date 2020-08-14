import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Search.css";

function Search({ getQuery }) {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };
  return (
    <div>
      <form className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search for beer..."
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
        <SearchIcon className="header__searchIcon" />
      </form>
    </div>
  );
}

export default Search;
