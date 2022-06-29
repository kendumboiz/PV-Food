import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-api-collection.herokuapp.com/allproduct/",
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => ({
        url: `products`,
        method: "GET",
      }),
    }),
    getProductDetail: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
