import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./products/productSlice";
import orderReducer from "./order/orderSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    order: orderReducer,
    user: userReducer,
  },
});
