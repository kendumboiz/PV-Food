import "./Product.css";

import { useEffect, useState } from "react";
import {
  useGetAllProductQuery,
  useGetProductBySearchQuery,
} from "services/productService";

import { CircularProgress } from "@mui/material";
import Filter from "components/Filter";
import Images from "constants/images";
import Indicator from "components/Pagination";
import { Link } from "react-router-dom";
import { useGetProductByFilterNameQuery } from "services/productService";
import { useSelector } from "react-redux";

function AllProduct() {
  const searchKeyword = useSelector((state) => state.filter.searchTerm);
  const filterName = useSelector((state) => state.filter.filterTerm);

  const [productList, setProductList] = useState([]);
  var [data, setData] = useState(null);
  const [params, setParams] = useState({
    _page: 1,
    _limit: 8,
  });

  const {
    data: filterData,
    error: filterError,
    isSuccess: filterSuccess,
  } = useGetProductByFilterNameQuery({
    filterName: filterName,
    params: params,
  });

  const {
    data: searchData,
    error: searchError,
    isSuccess: searchSuccess,
  } = useGetProductBySearchQuery({
    keyword: searchKeyword,
    params: params,
  });

  const {
    data: getAllProductData,
    error: getProductError,
    isSuccess: getProductSuccess,
  } = useGetAllProductQuery({ params });

  useEffect(() => {
    handleSetProduct();
  }, [filterSuccess, searchSuccess, getProductSuccess]);

  const handleSetProduct = () => {
    if (searchKeyword && searchData) {
      setProductList(searchData.data);
      data = searchData;
      setData(data);
    } else if (filterName && filterData) {
      setProductList(filterData.data);
      data = filterData;
      setData(data);
    } else if (getAllProductData) {
      setProductList(getAllProductData.data);
      data = getAllProductData;
      setData(data);
      console.log(
        "🚀 ~ file: index.jsx ~ line 68 ~ handleSetProduct ~ data",
        data
      );
    }
  };

  if (!filterSuccess || !searchSuccess || !getProductSuccess)
    return (
      <div className="product_loading">
        <CircularProgress size={250} className="loading_icon" color="success" />
        <img className="logo" src={Images.LOGO} alt="" />
      </div>
    );

  if (searchError || filterError || getProductError) throw getProductError;

  return (
    <div className="product_container">
      <Filter />
      <ul className="product_list">
        {productList && productList.length !== 0
          ? productList.map((item, key) => {
              return (
                <li key={key} className="product_item">
                  <span className="content">
                    <img className="img" src={item.imageUrl} alt="abc" />
                    <span className="content-name">{item.name} </span> <br />
                    <span className="content-price">
                      {parseFloat(item.price * 1000).toLocaleString("it-IT", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>{" "}
                    <br />
                    <button className="buy-item">
                      <Link to={`/product/${item.id}`}>Detail</Link>
                    </button>
                  </span>
                </li>
              );
            })
          : []}
      </ul>

      {data ? (
        <Indicator data={data} params={params} setParams={setParams} />
      ) : null}
    </div>
  );
}

export default AllProduct;
