// import React, { useState } from "react";
import "./pagination.css";

function Pagination(props) {
  const { params, setPagination } = props;

  // const [pagination, setPagination] = useState({
  //     _page: 1,
  //     _limit: 8,
  //     _totalRows: 12,
  // });
  const { _page, _limit, _totalRows } = params;

  const totalPages = Math.ceil(_totalRows / _limit);
  // xài Math.ceil ( vidu 51 / 10 = 5.1 -> thì Math.ceil sẽ lấy up tức là 6)
  // tổng số item / sô item muốn chia trên mỗi trang (vidu : 50 item và muốn chia mỗi trang 10sp -> 50 / 10 = 5 ; ta sẽ có 5 trang)

  function setFoodList(newPage) {
    console.log("new page : ", newPage);
    setPagination(newPage);
  }
  return (
    <div className="pagination">
      <button
        className="pg-btn "
        disabled={_page <= 1}
        onClick={() => setFoodList(_page - 1)}
      >
        Prev
      </button>

      <button
        className="pg-btn"
        disabled={_page >= totalPages}
        onClick={() => setFoodList(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
