import "./Foodpage.css";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import AllProduct from "components/AllProduct";
import Banner from "components/ProductBanner";
import Error from "components/NotFound";
import ProdDetail from "components/ProdDetail";

function FoodPage(props) {
  const { pathname } = useLocation();
  console.log("🚀 ~ file: index.jsx ~ line 19 ~ FoodPage ~ pathname", pathname);

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
