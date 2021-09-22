import Checkout from "components/Checkout";
import EditCheckout from "components/EditSummary";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
            <Link to="/home/food/all-product">all product </Link>
            <Link to="/home/food/combo">combo </Link>
            <Link to="/home/food/cereals">cereal </Link>
            <Link to="/home/food/best-seller">best </Link>
            <Link to="/home/food/tay-ninh-food">tây ninh </Link>
            {/* <button
              className="filter"
              onClick={() => (window.location.href = `/home/food/all-product`)}
            >
              All
            </button>
            <button
              className="filter"
              onClick={() =>
                window.history.pushState(
                  nextState,
                  nextTitle,
                  `/home/food/snack`
                )
              }
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
            </button> */}
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
