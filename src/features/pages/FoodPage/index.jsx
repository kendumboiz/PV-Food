import Checkout from "components/Checkout";
import EditCheckout from "components/EditSummary";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Banner from "./banner";
import CerealsProduct from "./CerealsProduct";
import ComboProduct from "./ComboProduct";
import "./Foodpage.css";
import Product from "./Product";
import SnackProduct from "./SnackProduct";
import TayninhProduct from "./TayninhProduct";

function FoodPage(props) {
  const showComponent = useSelector((state) => state.product.showComponent);

  const [frame, setFrame] = useState(
    localStorage.getItem("frame") || "Best seller"
  );

  const handleOpenFrame = (name) => {
    setFrame(name);
    localStorage.setItem("frame", name);
  };

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
            <button className="filter" onClick={() => handleOpenFrame("Snack")}>
              Snack
            </button>
            <button className="filter" onClick={() => handleOpenFrame("Combo")}>
              Combo
            </button>
            <button
              className="filter"
              onClick={() => handleOpenFrame("Cereals")}
            >
              Cereals
            </button>
            <button
              className="filter"
              onClick={() => handleOpenFrame("Best seller")}
            >
              Best seller
            </button>
            <button
              className="filter"
              onClick={() => handleOpenFrame("Tây Ninh Food")}
            >
              Tây Ninh Food
            </button>
          </div>
          <div
            className={
              frame === "Best seller" ? "open_bestseller" : "bestseller"
            }
          >
            <Product />
          </div>
          <div className={frame === "Snack" ? "open_snack" : "snack"}>
            <SnackProduct />
          </div>
          <div
            className={frame === "Tây Ninh Food" ? "open_tayninh" : "tayninh"}
          >
            <TayninhProduct />
          </div>
          <div className={frame === "Combo" ? "open_combo" : "combo"}>
            <ComboProduct />
          </div>
          <div className={frame === "Cereals" ? "open_cereals" : "cereals"}>
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
