import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { searchProduct } from "actions/SearchAction";
import "./Search.css";

function Search(props) {
  const { openSearchFrame, setOpenSearchFrame } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const [keyWord, setKeyWord] = useState("");

  const validateKeyWord = () => {
    if (!keyWord || keyWord === "") return false;
    return true;
  };

  const form = document.querySelector("#search_form");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateKeyWord()) return alert("wrong");

    setOpenSearchFrame(false);

    // history.push(`/home/food?keyword=${keyWord}`);
    // history.push(`/home/food?keyword=${keyWord}`);
    dispatch(searchProduct(keyWord));
    console.log(
      "🚀 ~ file: index.jsx ~ line 30 ~ handleSubmit ~ dispatch(searchProduct(keyWord))",
      dispatch(searchProduct(keyWord))
    );

    form.reset();
  };

  return (
    <div>
      <div
        className={openSearchFrame ? "open-overlay" : "overlay"}
        onClick={() => setOpenSearchFrame(false)}
      ></div>
      <div className={openSearchFrame ? "open_search" : "search_container"}>
        <form
          id="search_form"
          onSubmit={handleSubmit}
          className="search_section"
        >
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
