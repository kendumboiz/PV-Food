import "./Foodpage.css";

import {
  Navigate,
  Route,
  Routes,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import AllProduct from "components/AllProduct";
import Banner from "components/ProductBanner";
import Error from "components/NotFound";
import ProdDetail from "components/ProdDetail";
import React from "react";

function FoodPage(props) {
  const { pathname } = useLocation();
  console.log("🚀 ~ file: index.jsx ~ line 19 ~ FoodPage ~ pathname", pathname);
  // console.log("🚀 ~ file: index.jsx ~ line 29 ~ FoodPage ~ path", path);

  return (
    <div>
      <Banner />
      <div className="filter">
        <Routes>
          <Route path="/" element={<Navigate to="food" />} />

          <Route path="food" element={<AllProduct />} />

          <Route path="food/:id" element={<ProdDetail />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default FoodPage;
