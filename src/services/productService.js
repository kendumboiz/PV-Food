import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://json-api-collection.herokuapp.com/allproduct/",
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: (paramString) => ({
        url: `products?${paramString}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllProductQuery } = productApi;
