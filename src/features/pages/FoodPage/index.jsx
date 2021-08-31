import Checkout from "components/Checkout";
import EditCheckout from "components/EditSummary";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AllProduct from "./AllProduct";
import Banner from "./banner";
import CerealsProduct from "./CerealsProduct";
import ComboProduct from "./ComboProduct";
import "./Foodpage.css";
import Product from "./Product";
import SnackProduct from "./SnackProduct";
import TayninhProduct from "./TayninhProduct";

function FoodPage(props) {
  const showComponent = useSelector((state) => state.product.showComponent);

  // const [frame, setFrame] = useState(
  //   localStorage.getItem("frame") || "All product"
  // );

  // const handleOpenFrame = (name) => {
  //   setFrame(name);
  //   localStorage.setItem("frame", name);
  // };

  const { category } = useParams();

  useEffect(() => {
    console.log("cateory is :", category);
  }, [category]);

  return (
    <div>
      <Banner />
      <div className="filter">
        <div
          className={
            showComponent === "List product"
              ? "fiter_container"
              : "close_filter"
          }
        >
          <div className="filter_product">
            <button
              className="filter"
              onClick={() => (window.location.href = `/home/food/all-product`)}
            >
              All
            </button>
            <button
              className="filter"
              onClick={() => (window.location.href = `/home/food/snack`)}
            >
              Snack
            </button>
            <button
              className="filter"
              onClick={() => (window.location.href = `/home/food/combo`)}
            >
              Combo
            </button>
            <button
              className="filter"
              onClick={() => (window.location.href = `/home/food/cereals`)}
            >
              Cereals
            </button>
            <button
              className="filter"
              onClick={() => (window.location.href = `/home/food/best-seller`)}
            >
              Best seller
            </button>
            <button
              className="filter"
              onClick={() =>
                (window.location.href = `/home/food/tay-ninh-food`)
              }
            >
              Tây Ninh Food
            </button>
          </div>
          <div
            className={
              category === "all-product" ? "open_bestseller" : "bestseller"
            }
          >
            <AllProduct />
          </div>
          <div
            className={
              category === "best-seller" ? "open_bestseller" : "bestseller"
            }
          >
            <Product />
          </div>
          <div className={category === "snack" ? "open_snack" : "snack"}>
            <SnackProduct />
          </div>
          <div
            className={
              category === "tay-ninh-food" ? "open_tayninh" : "tayninh"
            }
          >
            <TayninhProduct />
          </div>
          <div className={category === "combo" ? "open_combo" : "combo"}>
            <ComboProduct />
          </div>
          <div className={category === "cereals" ? "open_cereals" : "cereals"}>
            <CerealsProduct />
          </div>
        </div>
        <Checkout />
        <EditCheckout />
      </div>
    </div>
  );
}

export default FoodPage;
