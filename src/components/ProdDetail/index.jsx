import "./ProdDetail.css";

import React, { useEffect, useState } from "react";
import {
  addNewProduct,
  decreaseProduct,
  increaseProduct,
  updateProduct,
} from "actions/CartAction";
import { addProduct, updateQty } from "features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "constants/images";
import Rate from "../Rate";
import Slide from "react-reveal/Slide";
import axios from "axios";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";

function ProdDetail(props) {
  const listCart = useSelector((state) => state.cart.list);
  const dispatch = useDispatch();
  const { id } = useParams();

  var [imageList, setImageList] = useState([]);
  var [tagList, setTagList] = useState([]);
  var [productItems, setProductItems] = useState({});
  var [imageItems, setImageItems] = useState(null);
  var [firstImage, setFirstImage] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getProdDetail();
  }, [id]);

  const getProdDetail = async () => {
    try {
      const res = await axios.get(
        `https://json-api-collection.herokuapp.com/allproduct/products/${id}`
      );
      console.log("🚀 ~ file: index.jsx ~ line 8 ~ getProdDetail ~ res", res);

      productItems = res.data;
      tagList = res.data.productTags;
      imageList = res.data.imageTags;
      firstImage = res.data.imageTags[0].imageUrl;

      setProductItems(productItems);
      setImageList(imageList);
      setTagList(tagList);
      setFirstImage(firstImage);
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
      dispatch(updateQty(item));
    } else {
      dispatch(addProduct(item));
    }
  };

  const onRemoveQty = (item) => {
    console.log("🚀 ~ file: index.jsx ~ line 74 ~ onRemoveQty ~ item", item);
    dispatch(decreaseProduct({ item }));
    setCount(count - 1);
  };

  const onAddQty = (item) => {
    console.log("🚀 ~ file: index.jsx ~ line 79 ~ onAddQty ~ item", item);
    dispatch(updateQty(item));
    setCount(count + 1);
  };

  const handleChangeImg = (item) => {
    imageItems = item.imageUrl;
    setImageItems(imageItems);
  };
  return (
    <div>
      <div className="detail_container">
        <div className="img_detail">
          <ul className="img_item_container">
            {imageList.map((item, key) => {
              return (
                <li
                  onClick={() => handleChangeImg(item)}
                  className="img_item"
                  key={key}
                >
                  <img src={item.imageUrl} alt="" />
                </li>
              );
            })}
          </ul>
          <div className="img_show">
            <Slide bottom opposite>
              <img
                src={
                  imageItems ? imageItems : firstImage
                  // productItems.imageUrl
                  //   ? productItems.imageUrl
                  //   : Images.EMPTY_CART
                }
                alt=""
              />
            </Slide>
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
                  <span>{count}</span>
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

      <div className="reviews">
        <div className="rating">
          <h2>Reviews</h2>
          <div className="rating_details">
            <div className="rating_items">
              <h3>Cannabis</h3>
              <div className="ratings">
                {/* <img src={Images.RATING} alt="" /> */}
                <Rate />
                <p>Top</p>
              </div>
            </div>
            <div className="rating_items">
              <h3>Packaging</h3>
              <div className="ratings">
                {/* <img src={Images.RATING} alt="" /> */}
                <Rate />
                <p>Top</p>
              </div>
            </div>
            <div className="rating_items">
              <h3>Shipping</h3>
              <div className="ratings">
                {/* <img src={Images.RATING} alt="" /> */}
                <Rate />
                <p>Top</p>
              </div>
            </div>
            <div className="rating_items">
              <h3>Experience</h3>
              <div className="ratings">
                {/* <img src={Images.RATING} alt="" /> */}
                <Rate />
                <p>Top</p>
              </div>
            </div>
          </div>
        </div>
        <div className="comments">
          <div className="global_rating">
            <h3>Global rating</h3>
            <div className="average">
              <span className="avg_number">4.0</span>

              <span className="line"></span>

              <span className="avg_total">101 rating</span>
            </div>
          </div>
          <div className="comments_detail">
            <div className="comments_item">
              <p className="quality_comment">Awesome</p>
              <div className="comment_info">
                <p className="cmt_time">13 September</p>-{" "}
                <p className="cmt_username">Luke</p>-{" "}
                <p className="order_status">Verified order</p>
              </div>
              <div className="user_comment">
                <p>
                  Amazed, it was the first time i bought cannabis pre-rolled,
                  very satisfied
                </p>
              </div>
            </div>
            <div className="comments_item">
              <p className="quality_comment">Awesome</p>
              <div className="comment_info">
                <p className="cmt_time">13 September</p>-{" "}
                <p className="cmt_username">Luke</p>-{" "}
                <p className="order_status">Verified order</p>
              </div>
              <div className="user_comment">
                <p>
                  Amazed, it was the first time i bought cannabis pre-rolled,
                  very satisfied
                </p>
              </div>
            </div>
            <div className="comments_item">
              <p className="quality_comment">Awesome</p>
              <div className="comment_info">
                <p className="cmt_time">13 September</p>-{" "}
                <p className="cmt_username">Luke</p>-{" "}
                <p className="order_status">Verified order</p>
              </div>
              <div className="user_comment">
                <p>
                  Amazed, it was the first time i bought cannabis pre-rolled,
                  very satisfied
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product_tag">
        <h2>Often bought together</h2>
        <div className="tags">
          {tagList.map((item, key) => {
            return (
              <div key={key} className="tag_items">
                <div className="tag_img">
                  <span className="cart_icon">
                    <FontAwesomeIcon icon={faCartPlus} />
                  </span>
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="tag_info">
                  <h3>{item.name} </h3>
                  <p className="tag_description">{item.description} </p>
                  <p className="tag_prices">
                    {parseFloat(item.price * 1000).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                      // minimumFractionDigits: 3,
                    })}{" "}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ProdDetail;
