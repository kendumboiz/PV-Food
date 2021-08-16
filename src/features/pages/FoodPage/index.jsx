import EditCheckout from "components/EditSummary";
import React, { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Banner from "./banner";
import CerealsProduct from "./CerealsProduct";
import ComboProduct from "./ComboProduct";
import "./Foodpage.css";
import Product from "./Product";
import SnackProduct from "./SnackProduct";
import TayninhProduct from "./TayninhProduct";

function FoodPage(props) {
  const [openBestsellerFrame, setOpenBestsellerFrame] = useState(true);
  const [openSnackFrame, setOpenSnackFrame] = useState(false);
  const [openTayninhFrame, setOpenTayninhFrame] = useState(false);
  const [openComboFrame, setOpenComboFrame] = useState(false);
  const [openCerealsFrame, setOpenCerealsFrame] = useState(false);

  const openBestseller = () => {
    setOpenBestsellerFrame(true);
    setOpenSnackFrame(false);
    setOpenComboFrame(false);
    setOpenTayninhFrame(false);
    setOpenCerealsFrame(false);
  };

  const openSnack = () => {
    setOpenSnackFrame(true);
    setOpenBestsellerFrame(false);
    setOpenComboFrame(false);
    setOpenTayninhFrame(false);
    setOpenCerealsFrame(false);
  };

  const openTayninh = () => {
    setOpenTayninhFrame(true);
    setOpenSnackFrame(false);
    setOpenBestsellerFrame(false);
    setOpenComboFrame(false);
    setOpenCerealsFrame(false);
  };

  const openCombo = () => {
    setOpenComboFrame(true);
    setOpenTayninhFrame(false);
    setOpenSnackFrame(false);
    setOpenBestsellerFrame(false);
    setOpenCerealsFrame(false);
  };

  const openCereals = () => {
    setOpenCerealsFrame(true);
    setOpenComboFrame(false);
    setOpenTayninhFrame(false);
    setOpenSnackFrame(false);
    setOpenBestsellerFrame(false);
  };

  return (
    <div>
      <Banner />
      <div className="filter_product">
        <button className="filter" onClick={openSnack}>
          Snack
        </button>
        <button className="filter" onClick={openCombo}>
          Combo
        </button>
        <button className="filter" onClick={openCereals}>
          Cereals
        </button>
        <button className="filter" onClick={openBestseller}>
          Best Seller
        </button>
        <button className="filter" onClick={openTayninh}>
          Tây Ninh Food
        </button>
      </div>
      <div className={openBestsellerFrame ? "open_bestseller" : "bestseller"}>
        <Product />
      </div>
      <div className={openSnackFrame ? "open_snack" : "snack"}>
        <SnackProduct />
      </div>
      <div className={openTayninhFrame ? "open_tayninh" : "tayninh"}>
        <TayninhProduct />
      </div>
      <div className={openComboFrame ? "open_combo" : "combo"}>
        <ComboProduct />
      </div>
      <div className={openCerealsFrame ? "open_cereals" : "cereals"}>
        <CerealsProduct />
      </div>
      <EditCheckout />
    </div>
  );
}

export default FoodPage;
