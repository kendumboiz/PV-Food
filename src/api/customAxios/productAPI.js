import axiosClient from "./axiosClient";

// const foodBaseUrl = process.env.FOOD_BASE_API;

export const productApi = {
  getAll: (params) => {
    const url = `/allproduct/products`;
    return axiosClient.get(url, { params });
  },

  getProductDetail: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
