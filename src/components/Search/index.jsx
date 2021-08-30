import React, { useState } from "react";
import "./Search.css";

function Search(props) {
  const [frame, setFrame] = useState(false);
  const [keyWord, setKeyWord] = useState("");

  const openFrame = () => {
    setFrame(true);
  };

  const closeFrame = () => {
    setFrame(false);
  };

  const validateKeyWord = () => {
    if (!keyWord || keyWord === "") return false;
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("submited");
    if (!validateKeyWord()) return alert("wrong");

    window.location.href = `/home/food?keyword=${keyWord}`;
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
        <form onSubmit={handleSubmit} className="search_section">
          <h2>Search the store</h2>
          <input
            type="text"
            onChange={(e) => setKeyWord(e.target.value)}
            placeholder="search"
          />
        </form>
      </div>
    </div>
  );
}

export default Search;
