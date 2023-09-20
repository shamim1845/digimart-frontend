import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productSlice";
import orderReducer from "./order/orderSlice";
import userReducer from "./user/userSlice";
import productFilterReducer from "./productFilter/productFilterSlice";
import apiCreator from "./api/apiCreator";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [apiCreator.reducerPath]: apiCreator.reducer,
    products: productsReducer,
    order: orderReducer,
    user: userReducer,
    productFilter: productFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiCreator.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
