import { addNewProduct, updateProduct } from "actions/CartAction";
import Pagination from "components/Pagination";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Product/Product.css";

function AllProduct(props) {
  const listCart = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();

  // console.log(props);
  const [productList, setProductList] = useState([]);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 8,
    _totalRows: 80,
  });
  const { keyword } = queryString.parse(window.location.search);

  useEffect(() => {
    if (typeof keyword !== "undefined" && keyword && keyword !== "") {
      fetchKeywordAPI();
    } else {
      fetchAPI();
    }
    console.log("key word is :", keyword);
  }, [keyword, params]);

  const setPagination = (newPage) => {
    console.log("new page", newPage);
    setParams({
      ...params,
      _page: newPage,
    });
  };

  const fetchKeywordAPI = async () => {
    try {
      const paramString = queryString.stringify(params);

      const response = await fetch(
        `https://json-api-collection.herokuapp.com/allproduct/products?name_like=${keyword}&${paramString}`
      );
      const responseJSON = await response.json();
      const { data } = responseJSON;
      setProductList(data);
      console.log("response ", responseJSON);
    } catch (error) {
      console.log("Failed to fetch Food List :", error.message);
    }
  };

  const fetchAPI = async () => {
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
    } catch (error) {
      console.log("Failed to fetch Food List :", error.message);
    }
  };

  // const filterTayNinh = (data) => {
  //   const tayNinhFood = data.filter(item => item.category === "tây ninh")
  // }

  const handleAddToCart = (item) => {
    const existedItem = listCart.find(
      (x) => x.category === item.category && x.id === item.id
    );
    if (existedItem) {
      dispatch(updateProduct(item));
    } else {
      dispatch(addNewProduct(item));
    }
  };

  return (
    <div className="product_container">
      <ul className="product_list">
        {productList.map((item, key) => {
          return (
            <li key={key} className="product_item">
              <span className="content">
                <img className="img" src={item.imageUrl} alt="abc" />
                <span className="content-name">{item.name} </span> <br />
                <span className="content-price">{item.price}</span> <br />
                <button
                  // onClick={() => props.addBasket(item)}
                  onClick={() => handleAddToCart(item)}
                  className="buy-item"
                >
                  Detail
                </button>
              </span>
            </li>
          );
        })}
      </ul>
      <Pagination params={params} setPagination={setPagination} />
    </div>
  );
}

export default AllProduct;
