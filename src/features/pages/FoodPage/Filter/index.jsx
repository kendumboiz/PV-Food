import { filterProduct } from "actions/SearchAction";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

function Filter(props) {
  const dispatch = useDispatch();

  var [filterName, setFilterName] = useState(null);

  const activeFilter = (name) => {
    console.log("🚀 ~ file: index.jsx ~ line 10 ~ activeFilter ~ name", name);
    filterName = name;
    setFilterName(filterName);
    dispatch(filterProduct(filterName));
  };

  return (
    <div>
      <div onClick={() => activeFilter("best seller")}>Best seller</div>
      <div onClick={() => activeFilter("snack")}>snack</div>
      <div onClick={() => activeFilter("tây ninh")}>Tay ninh</div>
      <div onClick={() => activeFilter("combo")}>Combo </div>
      <div onClick={() => activeFilter("ngũ cốc")}>Cereals</div>
    </div>
  );
}

export default Filter;
