import "./pagination.css";

import React, { useEffect } from "react";

import { Pagination } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";

Indicator.propTypes = {
  list: PropTypes.array.isRequired,
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

function Indicator({ list, params, setParams }) {
  console.log("🚀 ~ file: index.jsx ~ line 15 ~ Indicator ~ list, params", {
    list,
    params,
  });
  const [page, setPage] = useState(1);
  var [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    calculateTotalPages();
  }, [list.length]);

  const calculateTotalPages = () => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 25 ~ useEffect ~ list.length",
      list.length
    );
    const totalPages = Math.ceil(list.length / params._limit);
    console.log(
      "🚀 ~ file: index.jsx ~ line 29 ~ useEffect ~ totalPages",
      totalPages
    );
    totalPage = totalPages;
    setTotalPage(totalPage);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    setParams({
      ...params,
      _page: value,
    });
  };

  return (
    <div className="pagination">
      {list && list.length !== 0 ? (
        <Pagination
          page={page}
          // value={props.selectedValue ? props.selectedValue : " "}
          count={totalPage}
          size="large"
          onChange={handlePageChange}
        />
      ) : null}
    </div>
  );
}

export default Indicator;
