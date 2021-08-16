import { addBasket } from "actions/BasketAction";
import { addNewProduct, updateProduct } from "actions/Cart";
import Pagination from "components/Pagination";
import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
// import "./Product.css";

function CerealsProduct(props) {
  const listCart = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();
  // console.log(props);
  const [productList, setProductList] = useState([]);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 8,
    _totalRows: 20,
  });
  useEffect(() => {
    fetchAPI();
  }, [params]);
  const setPagination = (newPage) => {
    console.log("new page", newPage);
    setParams({
      ...params,
      _page: newPage,
    });
  };

  const fetchAPI = async () => {
    try {
      const paramString = queryString.stringify(params);

      const response = await fetch(
        `https://json-server-collection.herokuapp.com/cereals/products?${paramString}`
      );
      const responseJSON = await response.json();
      console.log("best seller : ", { responseJSON });

      const { data } = responseJSON;
      console.log("data Best Seller is : ", data);
      setProductList(data);
    } catch (error) {
      console.log("Failed to fetch Food List :", error.message);
    }
  };

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
        {productList.map((item) => {
          return (
            <li key={item.id} className="product_item">
              <span className="content">
                <img className="img" src={item.imageUrl} alt="abc" />
                <span className="content-name">{item.name} </span> <br />
                <span className="content-price">{item.price}</span> <br />
                <button
                  // onClick={() => props.addBasket(item)}
                  onClick={() => handleAddToCart(item)}
                  className="buy-item"
                >
                  Mua hàng
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

export default connect(null, { addBasket })(CerealsProduct);
