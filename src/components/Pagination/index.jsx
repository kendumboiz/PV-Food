import "./pagination.css";

import React, { useEffect, useState } from "react";

import { Pagination } from "@mui/material";
import PropTypes from "prop-types";

Indicator.propTypes = {
  data: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  setParams: PropTypes.func.isRequired,
};

Indicator.defaultProps = {
  data: {},
};

function Indicator({ data, params, setParams }) {
  // console.log(
  //   "🚀 ~ file: index.jsx ~ line 19 ~ Indicator ~ { data, params, setParams }",
  //   { data, params, setParams }
  // );

  const totalRows = data.pagination._totalRows;
  const limit = params._limit;

  const [page, setPage] = useState(1);
  var [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    if (!data) return;
    calculateTotalPages();
  }, [data]);

  const calculateTotalPages = () => {
    if (!data) return;

    const totalPages = Math.ceil(totalRows / limit);
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
      {data && data.length !== 0 ? (
        <Pagination
          page={page}
          // value={props.selectedValue ? props.selectedValue : " "}
          count={totalPage ? totalPage : 0}
          size="large"
          onChange={handlePageChange}
        />
      ) : null}
    </div>
  );
}

export default Indicator;
