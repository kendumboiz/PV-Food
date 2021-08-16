import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  const [frame, setFrame] = useState(false);

  const openFrame = () => {
    setFrame(true);
  };

  const closeFrame = () => {
    setFrame(false);
  };

  return (
    <div>
      <div className="search_toggle">
        <i onClick={openFrame} class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div
        className={frame ? "open-overlay" : "overlay"}
        onClick={closeFrame}
      ></div>
      <div className={frame ? "open_search" : "search_container"}>
        <div className="search_section">
          <h2>Search the store</h2>
          <input type="text" placeholder="search" />
        </div>
      </div>
    </div>
  );
}

export default Search;
