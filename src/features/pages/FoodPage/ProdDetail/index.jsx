import {
  addNewProduct,
  increaseProduct,
  updateProduct,
} from "actions/CartAction";
import axios from "axios";
import Images from "constants/images";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ProdDetail.css";

function ProdDetail(props) {
  const listCart = useSelector((state) => state.cart.list);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log("🚀 ~ file: index.jsx ~ line 7 ~ ProdDetail ~ id", id);

  const [imageList, setImageList] = useState([]);
  var [productItems, setProductItems] = useState({});

  useEffect(() => {
    getProdDetail();
  }, []);

  const getProdDetail = async () => {
    try {
      const res = await axios.get(
        `https://json-api-collection.herokuapp.com/allproduct/products/${id}`
      );
      console.log("🚀 ~ file: index.jsx ~ line 8 ~ getProdDetail ~ res", res);

      productItems = res.data;
      setProductItems(productItems);

      setImageList(res.data.imageTags);
      console.log(
        "🚀 ~ file: index.jsx ~ line 29 ~ getProdDetail ~ setImageList",
        imageList
      );
      console.log(
        "🚀 ~ file: index.jsx ~ line 13 ~ ProdDetail ~ productItems",
        productItems
      );
    } catch (error) {
      if (error && error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };

  const handleAddToCart = (item) => {
    console.log(
      "🚀 ~ file: index.jsx ~ line 53 ~ handleAddToCart ~ item",
      item
    );
    const existedItem = listCart.find(
      (x) => x.category === item.category && x.id === item.id
    );
    if (existedItem) {
      dispatch(updateProduct(item));
    } else {
      dispatch(addNewProduct(item));
    }
  };

  const onRemoveQty = (item) => {
    console.log("🚀 ~ file: index.jsx ~ line 74 ~ onRemoveQty ~ item", item);
    // dispatch(decreaseProduct({ item }));
  };

  const onAddQty = (item) => {
    console.log("🚀 ~ file: index.jsx ~ line 79 ~ onAddQty ~ item", item);
    dispatch(increaseProduct(item));
  };
  return (
    <div className="detail_container">
      <div className="img_detail">
        <ul className="img_item_container">
          {imageList.map((item, key) => {
            return (
              <li className="img_item" key={key}>
                <img src={item.imageUrl} alt="" />
              </li>
            );
          })}
        </ul>
        <div className="img_show">
          <img
            src={
              productItems.imageUrl ? productItems.imageUrl : Images.EMPTY_CART
            }
            alt=""
          />
        </div>
      </div>
      <div className="product">
        <div className="product_info">
          <div className="hs">
            <div className="product_name">{productItems.name}</div>
            <div className="product_price">
              {parseFloat(productItems.price * 1000).toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
                // minimumFractionDigits: 3,
              })}
            </div>
          </div>
          <div className="description">{productItems.description}</div>
          <div className="product_interact">
            <div className="product_qty">
              <p>Choose the Quantity</p>
              <div className="obj">
                <button
                  onClick={() => onRemoveQty(productItems)}
                  className="remove_btn"
                  disabled={productItems.qty <= 1}
                >
                  -
                </button>
                <span>{productItems.qty}</span>
                <button
                  onClick={() => onAddQty(productItems)}
                  className="add_btn"
                >
                  +
                </button>
              </div>
              {/* <FontAwesomeIcon icon /> */}
            </div>
            <div className="addToCart">
              <button onClick={() => handleAddToCart(productItems)}>
                Add to Shopping Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdDetail;
