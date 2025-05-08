import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//=> API creator for Entire application
const apiCreator = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/v1",
  }),
  tagTypes: [
    "Categories",
    "AdminCategories",
    "Brands",
    "getAllUsers",
    "getAllOrders",
    "getAllOrderStatus",
    "getMyFavouriteList",
    "getMyCartList",
    "getShippingInfo",
    "getMyAllOrders",
    "getAnalytics"
  ],
  endpoints: () => ({}),
});

export default apiCreator;
