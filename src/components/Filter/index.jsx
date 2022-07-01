// import { filterProduct } from "actions/SearchAction";

import "./Filter.css";

import React, { useState } from "react";

import { postFilterKeyword } from "features/filterSlice";
import { useDispatch } from "react-redux";

function Filter(props) {
  const dispatch = useDispatch();

  var [filterName, setFilterName] = useState(null);
  const [checked, setChecked] = useState(false);

  const activeFilter = (name) => {
    console.log("🚀 ~ file: index.jsx ~ line 10 ~ activeFilter ~ name", name);
    filterName = name;
    setFilterName(filterName);
    dispatch(postFilterKeyword(filterName));
  };

  return (
    <div className="section" id="group1">
      <h2>Filter</h2>
      <div onClick={() => activeFilter("best seller")} className="filter_btn">
        <label>
          Best Seller
          <input type="radio" name="radio group1" defaultChecked={true} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("snack")} className="filter_btn">
        <label>
          Snack
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("tây ninh")} className="filter_btn">
        <label>
          Tay ninh Food
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("combo")} className="filter_btn">
        <label>
          Combo
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("ngũ cốc")} className="filter_btn">
        <label>
          Cereals
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
    </div>
  );
}

export default Filter;
