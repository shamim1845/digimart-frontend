import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productSlice";
import orderReducer from "./order/orderSlice";
import userReducer from "./user/userSlice";
import productFilterReducer from "./productFilter/productFilterSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    order: orderReducer,
    user: userReducer,
    productFilter: productFilterReducer,
  },
});
