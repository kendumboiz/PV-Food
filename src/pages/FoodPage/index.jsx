import "./Foodpage.css";

import { Navigate, Route, Routes } from "react-router-dom";

import AllProduct from "components/AllProduct";
import Banner from "components/ProductBanner";
import Error from "components/NotFound";
import ProdDetail from "components/ProdDetail";
import { useGetAllProductQuery } from "services/productService";

function FoodPage(props) {
  const { data, error, isSuccess } = useGetAllProductQuery();

  return (
    <div>
      <Banner />
      <div className="filter">
        <Routes>
          <Route path="/" element={<Navigate to="food" />} />

          <Route path="food" element={<AllProduct data={data} />} />

          <Route path=":id" element={<ProdDetail />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default FoodPage;
