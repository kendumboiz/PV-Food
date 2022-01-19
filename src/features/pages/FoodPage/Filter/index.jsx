import { filterProduct } from "actions/SearchAction";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Filter.css";

function Filter(props) {
  const dispatch = useDispatch();

  var [filterName, setFilterName] = useState(null);
  const [checked, setChecked] = useState(false);

  const activeFilter = (name) => {
    console.log("🚀 ~ file: index.jsx ~ line 10 ~ activeFilter ~ name", name);
    filterName = name;
    setFilterName(filterName);
    dispatch(filterProduct(filterName));
  };

  return (
    <div className="section" id="group1">
      <h2>Filter</h2>
      <div onClick={() => activeFilter("best seller")} className="remember">
        <label>
          Best Seller
          <input type="radio" name="radio group1" defaultChecked={true} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("snack")} className="remember">
        <label>
          Snack
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("tây ninh")} className="remember">
        <label>
          Tay ninh Food
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("combo")} className="remember">
        <label>
          Combo
          <input type="radio" name="radio group1" defaultChecked={checked} />
          <span className="checkmark"></span>
        </label>
      </div>
      <div onClick={() => activeFilter("ngũ cốc")} className="remember">
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
