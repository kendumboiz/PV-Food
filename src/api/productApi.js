import axiosClient from "./axiosClient";

const productApi = {
  getAll: (params) => {
    const url = "/products";
    console.log("🚀 ~ file: productApi.js ~ line 6 ~ url", url);
    console.log(
      "🚀 ~ file: productApi.js ~ line 11 ~ axiosClient",
      axiosClient
    );
    return axiosClient.get(
      url
      // , { params }
    );
  },

  get: (id) => {
    const url = `/products/${id}`;
    return axiosClient.get(url);
  },
};
export default productApi;
