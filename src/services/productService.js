import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import queryString from "query-string";

const foodBaseUrl = process.env.REACT_APP_API_URL;
console.log("🚀 ~ file: productService.js ~ line 6 ~ foodBaseUrl", foodBaseUrl);

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${foodBaseUrl}/allproduct/`,
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: ({ params }) => {
        const paramString = queryString.stringify(params);

        console.log("🚀 ~ file: productService.js ~ line 15 ~ params", params);
        return {
          url: `products?${paramString}`,
          method: "GET",
          // responseHandler: (response) => response.json(),
        };
      },
    }),

    getProductDetail: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),

    getProductByFilterName: builder.query({
      query: ({ filterName, params }) => {
        // console.log("🚀 ~ file: productService.js ~ line 25 ~ data", {
        //   filterName,
        //   params,
        // });
        const paramString = queryString.stringify(params);

        return {
          url: `products?category=${filterName}&${paramString}`,
          method: "GET",
        };
      },
    }),

    getProductBySearch: builder.query({
      query: ({ keyword, params }) => {
        console.log(
          "🚀 ~ file: productService.js ~ line 42 ~ { keyword, params }",
          { keyword, params }
        );
        const paramString = queryString.stringify(params);

        return {
          url: `products?name_like=${keyword}&${paramString}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByFilterNameQuery,
  useGetProductBySearchQuery,
} = productApi;
