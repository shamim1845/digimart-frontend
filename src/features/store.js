import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./products/productSlice";
import authReducer from './auth/authSlice';
import orderReducer from "./order/orderSlice"




export const store = configureStore({
  reducer:{
    products: productReducer,
    order: orderReducer,
    auth: authReducer,
 
  },
 
});
