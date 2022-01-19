import React from "react";
import PropTypes from "prop-types";

LazyLoadingPage.propTypes = {};

function LazyLoadingPage(props) {
  return (
    <div class="container">
      <div class="top-layer"></div>
      <div class="top-layer top-layer--2"></div>
      <div class="top-layer top-layer--3"></div>
      <div class="top-layer top-layer--4"></div>
      <div class="top-layer top-layer--5"></div>
      <div class="bottom-layer"></div>
      <div class="bottom-layer bottom-layer--2"></div>
      <div class="bottom-layer bottom-layer--3"></div>
      <div class="left-layer"></div>
      <div class="left-layer left-layer--2"></div>
      <div class="left-layer left-layer--3"></div>
      <div class="left-layer left-layer--4"></div>
      <div class="right-layer"></div>
      <div class="right-layer right-layer--2"></div>
      <div class="right-layer right-layer--3"></div>
      {/* <div class="buttons">
        <button id="top">
          <img src="https://icongr.am/feather/arrow-down.svg" />
        </button>
        <button id="bottom">
          <img src="https://icongr.am/feather/arrow-up.svg" />
        </button>
        <button id="left">
          <img src="https://icongr.am/feather/arrow-right.svg" />
        </button>
        <button id="right">
          <img src="https://icongr.am/feather/arrow-left.svg" />
        </button>
      </div> */}
    </div>
  );
}

export default LazyLoadingPage;
