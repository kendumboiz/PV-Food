import "./Product.css";

import { useEffect, useState } from "react";
import {
  useGetAllProductQuery,
  useGetProductBySearchQuery,
} from "services/productService";

import { CircularProgress } from "@mui/material";
import Filter from "components/Filter";
import Images from "constants/images";
import Indicator from "components/Pagination";
import { Link } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";
import { useGetProductByFilterNameQuery } from "services/productService";
import { useSelector } from "react-redux";

function AllProduct() {
  const searchKeyword = useSelector((state) => state.filter.searchTerm);
  const filterName = useSelector((state) => state.filter.filterTerm);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [productList, setProductList] = useState([]);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 8,
    _totalRows: 1,
  });

  const {
    data: filterData,
    error: filterError,
    isSuccess: filterSuccess,
  } = useGetProductByFilterNameQuery({
    filterName: filterName,
    params: params,
  });

  const {
    data: searchData,
    error: searchError,
    isSuccess: searchSuccess,
  } = useGetProductBySearchQuery({
    keyword: searchKeyword,
    params: params,
  });
  console.log(
    "🚀 ~ file: index.jsx ~ line 48 ~ AllProduct ~ searchData",
    searchData
  );

  const responseInfo = useGetAllProductQuery();
  // {
  //   data: getProductData,
  //   error: getProductError,
  //   isSuccess: getProductSuccess,
  // }
  console.log(
    "🚀 ~ file: index.jsx ~ line 196 ~ AllProduct ~ responseInfo",
    responseInfo
  );

  // useEffect(() => {
  //   if (
  //     searchKeyword
  //     // && searchSuccess
  //   ) {
  //     getSearch();
  //     // setProductList(searchData);
  //   } else if (
  //     filterName
  //     // && filterSuccess
  //   ) {
  //     getFilter();
  //     // setProductList(filterData);
  //   } else {
  //     getAll();
  //     // setProductList(getProductData);
  //   }
  // }, [
  //   searchKeyword,
  //   filterName,
  //   params,
  //   // getProductSuccess,
  //   // filterSuccess,
  //   // searchSuccess,
  // ]);

  // const getFilter = async () => {
  //   try {
  //     const paramString = queryString.stringify(params);

  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_URL}/allproduct/products?category=${filterName}&${paramString}`
  //     );
  //     const responseJSON = await response.json();
  //     const { data } = responseJSON;
  //     setProductList(data);
  //     // setParams({
  //     //   ...params,
  //     //   _totalRows: data.length,
  //     // });
  //     console.log("response ", responseJSON);
  //     setIsLoading(true);
  //   } catch (error) {
  //     console.log("Failed to fetch Food List :", error.message);
  //   }
  // };

  // const getSearch = async () => {
  //   try {
  //     const paramString = queryString.stringify(params);

  //     const response = await fetch(
  //       `${process.env.REACT_APP_API_URL}/allproduct/products?name_like=${searchKeyword}&${paramString}`
  //     );
  //     const responseJSON = await response.json();
  //     const { data } = responseJSON;
  //     setProductList(data);
  //     // setParams({
  //     //   ...params,
  //     //   _totalRows: data.length,
  //     // });
  //     console.log("response ", responseJSON);
  //     setIsLoading(true);
  //   } catch (error) {
  //     console.log("Failed to fetch Food List :", error.message);
  //   }
  // };

  // const getAll = async () => {
  //   try {
  //     const paramString = queryString.stringify(params);
  //     // console.log(
  //     //   "🚀 ~ file: index.jsx ~ line 126 ~ getAll ~ paramString",
  //     //   JSON.parse(params)
  //     // );

  //     const res = await axios.get(
  //       `${process.env.REACT_APP_API_URL}/allproduct/products`,
  //       { params: { paramString } }
  //     );
  //     console.log("🚀 ~ file: index.jsx ~ line 135 ~ getAll ~ res", res);

  //     // const responseJSON = await response.json();

  //     // const { data } = responseJSON;

  //     setProductList(res.data);

  //     setIsLoading(true);
  //   } catch (error) {
  //     console.log("Failed to fetch Food List :", error.message);
  //   }
  // };

  return (
    <div className="product_container">
      <Filter />
      <ul className="product_list">
        {isLoading ? (
          productList.map((item, key) => {
            return (
              <li key={key} className="product_item">
                <span className="content">
                  <img className="img" src={item.imageUrl} alt="abc" />
                  <span className="content-name">{item.name} </span> <br />
                  <span className="content-price">
                    {parseFloat(item.price * 1000).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>{" "}
                  <br />
                  <button className="buy-item">
                    <Link to={`/product/${item.id}`}>Detail</Link>
                  </button>
                </span>
              </li>
            );
          })
        ) : (
          <div className="product_loading">
            <CircularProgress
              size={250}
              className="loading_icon"
              color="success"
            />
            <img className="logo" src={Images.LOGO} alt="" />
          </div>
        )}
      </ul>
      {/* {data ? <Pagination count={data.length} /> : null} */}

      <Indicator list={productList} params={params} setParams={setParams} />
    </div>
  );
}

export default AllProduct;
