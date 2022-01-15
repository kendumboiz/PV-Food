import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProdDetail.css";
import Images from "constants/images";

function ProdDetail(props) {
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
          <img src={Images.EMPTY_CART} alt="" />
        </div>
      </div>
      <div className="product_info">
        <div className="hs">
          <div className="product_name">{productItems.name}</div>
          <div className="product_price">{productItems.price}</div>
        </div>
        <div className="description">{productItems.description}</div>
        <div className="product_interact">
          <div className="qty">
            <p>Choose the Quantity</p>
            <input type="text" value={productItems.qty} />
          </div>
          <div className="addToCart">
            <button>Add to Shopping Bag</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdDetail;
