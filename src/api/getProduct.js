// import axios from "axios";

import { productApi } from "./customAxios/productAPI";

// import queryString from "query-string";

export const getFilter = async () => {
  try {
    // const paramString = queryString.stringify(params);
    // const response = await fetch(
    //   `${foodBaseUrl}?category=${filterName}&${paramString}`
    // );
    // const responseJSON = await response.json();
    // const { data } = responseJSON;
    // setProductList(data);
    // // setParams({
    // //   ...params,
    // //   _totalRows: data.length,
    // // });
    // console.log("response ", responseJSON);
    // setIsLoading(true);
  } catch (error) {
    console.log("Failed to fetch Food List :", error.message);
  }
};

export const getSearch = async () => {
  try {
    // const paramString = queryString.stringify(params);
    // const response = await fetch(
    //   `${process.env.REACT_APP_API_URL}/allproduct/products?name_like=${searchKeyword}&${paramString}`
    // );
    // const responseJSON = await response.json();
    // const { data } = responseJSON;
    // setProductList(data);
    // // setParams({
    // //   ...params,
    // //   _totalRows: data.length,
    // // });
    // console.log("response ", responseJSON);
    // setIsLoading(true);
  } catch (error) {
    console.log("Failed to fetch Food List :", error.message);
  }
};

export const getAll = async (params) => {
  try {
    // const paramString = queryString.stringify(params);
    // // console.log(
    // //   "🚀 ~ file: index.jsx ~ line 126 ~ getAll ~ paramString",
    // //   JSON.parse(params)
    // // );
    // const res = await axios.get(
    //   `${process.env.REACT_APP_API_URL}/allproduct/products`,
    //   { params: { paramString } }
    // );
    // console.log("🚀 ~ file: index.jsx ~ line 135 ~ getAll ~ res", res);
    // // const responseJSON = await response.json();
    // // const { data } = responseJSON;
    // setProductList(res.data);
    // setIsLoading(true);

    const res = await productApi.getAll(params);
    console.log("🚀 ~ file: getProduct.js ~ line 63 ~ getAll ~ res", res);
  } catch (error) {
    console.log("Failed to fetch Food List :", error.message);
  }
};
