import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Redux Thunk
export const fetchAsyncLoggedIn = createAsyncThunk(
  "user/fetchAsyncLoggedIn",
  async () => {
    const response = await axios.get(`/api/v1/loggedin`);
    return response.data.status;
  }
);

export const fetchAsyncUser = createAsyncThunk(
  "user/fetchAsyncUser",
  async () => {
    const userResponse = await axios.get("/api/v1/me");
    return userResponse.data.user;
  }
);

const localCartItem = JSON.parse(localStorage.getItem("cart-item"));
const localFavouriteItem = JSON.parse(localStorage.getItem("favourite-item"));
const initialState = {
  authenticated: false,
  userInfo: {},
  currency: "usd",
  cartItems: localCartItem ? localCartItem : [],
  favouriteItems: localFavouriteItem ? localFavouriteItem : [],
};

const userSlice = createSlice({
  name: "user info",
  initialState,
  reducers: {
    addCurrency: (state, { payload }) => {
      return { ...state, currency: payload };
    },
    addCartItem: (state, { payload }) => {
      const ExistCartItem =
        state.cartItems &&
        state.cartItems.find(
          (item) => item.product._id === payload.product._id
        );

      if (ExistCartItem) {
        state.cartItems = state.cartItems.map((item) => {
          if (item.product._id === payload.product._id) {
            item = payload;
          }
          return item;
        });
      } else {
        state.cartItems = [...state.cartItems, payload];
      }

      localStorage.setItem("cart-item", JSON.stringify(state.cartItems));
    },
    deleteCartItem: (state, { payload }) => {
      const deletedCartItem = state.cartItems.filter(
        (item) => item.product._id !== payload.product._id
      );

      state.cartItems = deletedCartItem;

      localStorage.setItem("cart-item", JSON.stringify(state.cartItems));
    },
    addFavouriteItem: (state, { payload }) => {
      const ExistFavouriteItem =
        state.favouriteItems &&
        state.favouriteItems.find(
          (item) => item.product._id === payload.product._id
        );

      if (ExistFavouriteItem) {
        state.favouriteItems = state.favouriteItems.map((item) => {
          if (item.product._id === payload.product._id) {
            item = payload;
          }
          return item;
        });
      } else {
        state.favouriteItems = [...state.favouriteItems, payload];
      }

      localStorage.setItem(
        "favourite-item",
        JSON.stringify(state.favouriteItems)
      );
    },
    deleteFavouriteItem: (state, { payload }) => {
      const deletedFavouriteItem = state.favouriteItems.filter(
        (item) => item.product._id !== payload.product._id
      );

      state.favouriteItems = deletedFavouriteItem;

      localStorage.setItem(
        "favourite-item",
        JSON.stringify(state.favouriteItems)
      );
    },
  },
  extraReducers: {
    [fetchAsyncLoggedIn.fulfilled]: (state, { payload }) => {
      return { ...state, authenticated: payload };
    },
    [fetchAsyncUser.fulfilled]: (state, { payload }) => {
      return { ...state, userInfo: payload };
    },
  },
});

export default userSlice.reducer;

export const {
  addCurrency,
  addCartItem,
  deleteCartItem,
  addFavouriteItem,
  deleteFavouriteItem,
} = userSlice.actions;
