import { CircularProgress } from "@mui/material";
import Pagination from "components/Pagination";
import Images from "constants/images";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Product/Product.css";
import Filter from "features/pages/FoodPage/Filter";

function AllProduct(props) {
  const searchKeyword = useSelector((state) => state.search.searchTerm);
  const filterName = useSelector((state) => state.search.filterTerm);
  // console.log(
  //   "🚀 ~ file: index.jsx ~ line 14 ~ AllProduct ~ filterName",
  //   filterName
  // );

  // console.log(
  //   "🚀 ~ file: index.jsx ~ line 12 ~ AllProduct ~ searchKeyword",
  //   searchKeyword
  // );

  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 8,
    _totalRows: 80,
  });
  // const { keyword } = queryString.parse(window.location.search);

  // useEffect(() => {
  //   if (
  //     searchKeyword !== "undefined" &&
  //     searchKeyword &&
  //     searchKeyword !== ""
  //   ) {
  //     fetchKeywordAPI();
  //   }
  //   // else {
  //   //   fetchAPI();
  //   // }
  //   console.log("key word is :", keyword);
  // }, [searchKeyword, params]);

  useEffect(() => {
    if (searchKeyword) {
      getSearch();
    } else if (filterName) {
      getFilter();
    } else {
      getAll();
    }
  }, [searchKeyword, filterName, params]);

  const setPagination = (newPage) => {
    console.log("new page", newPage);
    setParams({
      ...params,
      _page: newPage,
    });
  };

  const getFilter = async () => {
    try {
      const paramString = queryString.stringify(params);

      const response = await fetch(
        `https://json-api-collection.herokuapp.com/allproduct/products?category=${filterName}&${paramString}`
      );
      const responseJSON = await response.json();
      const { data } = responseJSON;
      setProductList(data);
      console.log("response ", responseJSON);
      setIsLoading(true);
    } catch (error) {
      console.log("Failed to fetch Food List :", error.message);
    }
  };

  const getSearch = async () => {
    try {
      const paramString = queryString.stringify(params);

      const response = await fetch(
        `https://json-api-collection.herokuapp.com/allproduct/products?name_like=${searchKeyword}&${paramString}`
      );
      const responseJSON = await response.json();
      const { data } = responseJSON;
      setProductList(data);
      console.log("response ", responseJSON);
      setIsLoading(true);
    } catch (error) {
      console.log("Failed to fetch Food List :", error.message);
    }
  };

  const getAll = async () => {
    try {
      const paramString = queryString.stringify(params);

      const response = await fetch(
        `https://json-api-collection.herokuapp.com/allproduct/products?${paramString}`
      );
      const responseJSON = await response.json();
      console.log(
        "🚀 ~ file: index.jsx ~ line 62 ~ fetchAPI ~ responseJSON",
        responseJSON
      );

      const { data } = responseJSON;
      // filterTayNinh(data)
      console.log("data Best Seller is : ", data);
      setProductList(data);
      setIsLoading(true);
    } catch (error) {
      console.log("Failed to fetch Food List :", error.message);
    }
  };

  // const filterTayNinh = (data) => {
  //   const tayNinhFood = data.filter(item => item.category === "tây ninh")
  // }

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
                  <span className="content-price">{item.price}</span> <br />
                  <button
                    // onClick={() => props.addBasket(item)}
                    // onClick={() => handleAddToCart(item)}
                    className="buy-item"
                  >
                    <Link to={`/product/item-detail/${item.id}`}>Detail</Link>
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
      <Pagination params={params} setPagination={setPagination} />
    </div>
  );
}

export default AllProduct;
