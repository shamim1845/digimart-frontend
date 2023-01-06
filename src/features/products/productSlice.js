import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { backendUrl } from "../../App";

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (page) => {
    const products = await axios.get(
      `${backendUrl}/api/v1/products?page=${page}`
    );

    return products.data;
  }
);

export const fetchAsyncProductForFilter = createAsyncThunk(
  "products/fetchAsyncProductForFilter",
  async ({ keyword, category, pricestart, priceend, currentPage }) => {
    let link;
    link = `${backendUrl}/api/v1/products?price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    if (keyword !== "") {
      link = `${backendUrl}/api/v1/products?keyword=${keyword}&price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    }
    if (category !== "") {
      link = `${backendUrl}/api/v1/products?category=${category}&price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    }
    if (keyword !== "" && category !== "") {
      link = `${backendUrl}/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    }
    // console.log(link);

    const products = await axios.get(link);

    return products.data;
  }
);

export const fetchAsyncProductsDetails = createAsyncThunk(
  "products/fetchAsyncProductDetails",
  async (id) => {
    const product = await axios.get(`${backendUrl}/api/v1/product/${id}`);

    return product.data;
  }
);

export const fetchAsyncNewArrivals = createAsyncThunk(
  "products/fetchAsyncNewArrivals",
  async ({ category, currentPage }) => {
    const products = await axios.get(
      `${backendUrl}/api/v1/products/new/arrivals?category=${category}&page=${currentPage}`
    );

    return products.data;
  }
);
export const fetchAsyncCategories = createAsyncThunk(
  "products/categories",
  async () => {
    const categories = await axios.get(
      `${backendUrl}/api/v1/products/category`
    );

    return categories.data;
  }
);

const localCartItem = JSON.parse(localStorage.getItem("cart-item"));
const localFavouriteItem = JSON.parse(localStorage.getItem("favourite-item"));

const initialState = {
  newArrivals: [],
  fetchProduct: [],
  singleProduct: {},
  allCategories: [],
  loading: true,
  keyword: "",
  category: "",
  cartItem: localCartItem ? localCartItem : [],
  favouriteItem: localFavouriteItem ? localFavouriteItem : [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
    addCategory: (state, { payload }) => {
      state.category = payload;
    },
    addCartItem: (state, { payload }) => {
      const ExistCartItem =
        state.cartItem &&
        state.cartItem.find((item) => item.product._id === payload.product._id);

      if (ExistCartItem) {
        state.cartItem = state.cartItem.map((item) => {
          if (item.product._id === payload.product._id) {
            item = payload;
          }
          return item;
        });
      } else {
        state.cartItem = [...state.cartItem, payload];
      }

      localStorage.setItem("cart-item", JSON.stringify(state.cartItem));
    },
    deleteCartItem: (state, { payload }) => {
      const deletedCartItem = state.cartItem.filter(
        (item) => item.product._id !== payload.product._id
      );

      state.cartItem = deletedCartItem;

      localStorage.setItem("cart-item", JSON.stringify(state.cartItem));
    },
    addFavouriteItem: (state, { payload }) => {
      const ExistFavouriteItem =
        state.favouriteItem &&
        state.favouriteItem.find(
          (item) => item.product._id === payload.product._id
        );

      if (ExistFavouriteItem) {
        state.favouriteItem = state.favouriteItem.map((item) => {
          if (item.product._id === payload.product._id) {
            item = payload;
          }
          return item;
        });
      } else {
        state.favouriteItem = [...state.favouriteItem, payload];
      }

      localStorage.setItem(
        "favourite-item",
        JSON.stringify(state.favouriteItem)
      );
    },
    deleteFavouriteItem: (state, { payload }) => {
      const deletedFavouriteItem = state.favouriteItem.filter(
        (item) => item.product._id !== payload.product._id
      );

      state.favouriteItem = deletedFavouriteItem;

      localStorage.setItem(
        "favourite-item",
        JSON.stringify(state.favouriteItem)
      );
    },
  },
  extraReducers: {
    [fetchAsyncNewArrivals.fulfilled]: (state, { payload }) => {
      return { ...state, newArrivals: payload, loading: false };
    },
    [fetchAsyncNewArrivals.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      return { ...state, fetchProduct: payload, loading: false };
    },

    [fetchAsyncProductForFilter.fulfilled]: (state, { payload }) => {
      return { ...state, fetchProduct: payload, loading: false };
    },

    [fetchAsyncProductsDetails.fulfilled]: (state, { payload }) => {
      return { ...state, singleProduct: payload, loading: false };
    },
    [fetchAsyncCategories.fulfilled]: (state, { payload }) => {
      return { ...state, allCategories: payload, loading: false };
    },
  },
});

export const {
  addKeyword,
  addCategory,
  addCartItem,
  deleteCartItem,
  addFavouriteItem,
  deleteFavouriteItem,
} = productSlice.actions;

export const getAllProducts = (state) => state.products;
export const getCategories = (state) => state.products.allCategories;
export const getProductDetails = (state) => state.products.singleProduct;
export const getCartItems = (state) => state.products.cartItem;
export const getFavouriteItems = (state) => state.products.favouriteItem;
export default productSlice.reducer;
