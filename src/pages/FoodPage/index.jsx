import "./Foodpage.css";

import {
  Route,
  Routes,
  Switch,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

import AllProduct from "components/AllProduct";
import Banner from "components/banner";
import Error from "components/NotFound";
import ProdDetail from "components/ProdDetail";
import React from "react";

function FoodPage(props) {
  const { pathname } = useLocation();
  // console.log("🚀 ~ file: index.jsx ~ line 29 ~ FoodPage ~ path", path);

  return (
    <div>
      <Banner />
      <div className="filter">
        <Routes>
          <Route index path={`${pathname}/food`} element={<AllProduct />} />

          <Route
            index
            path={`${pathname}/item-detail/:id`}
            element={<ProdDetail />}
          />

          <Route component={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default FoodPage;
