import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// For All Products
export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (page) => {
    const products = await axios.get(`/api/v1/products?page=${page}`);

    return products.data;
  }
);

// For Product Filter
export const fetchAsyncProductForFilter = createAsyncThunk(
  "products/fetchAsyncProductForFilter",
  async ({ keyword, category, pricestart, priceend, currentPage }) => {
    let link;
    link = `/api/v1/products?price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    if (keyword !== "") {
      link = `/api/v1/products?keyword=${keyword}&price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    }
    if (category !== "") {
      link = `/api/v1/products?category=${category}&price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    }
    if (keyword !== "" && category !== "") {
      link = `/api/v1/products?keyword=${keyword}&category=${category}&price[gte]=${pricestart}&price[lte]=${priceend}&page=${currentPage}`;
    }
    // console.log(link);

    const products = await axios.get(link);

    return products.data;
  }
);

// For Product Details
export const fetchAsyncProductsDetails = createAsyncThunk(
  "products/fetchAsyncProductDetails",
  async (id) => {
    const product = await axios.get(`/api/v1/product/${id}`);

    return product.data;
  }
);

// For New Arrivals
export const fetchAsyncNewArrivals = createAsyncThunk(
  "products/fetchAsyncNewArrivals",
  async ({ category, currentPage }) => {
    const products = await axios.get(
      `/api/v1/products/new/arrivals?category=${category}&page=${currentPage}`
    );

    return products.data;
  }
);

// For Categories
export const fetchAsyncCategories = createAsyncThunk(
  "products/categories",
  async () => {
    const categories = await axios.get(`/api/v1/products/category`);

    return categories.data;
  }
);

const initialState = {
  newArrivals: [],
  allProducts: [],
  singleProduct: {},
  allCategories: [],
  loading: true,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncNewArrivals.fulfilled]: (state, { payload }) => {
      return { ...state, newArrivals: payload, loading: false };
    },
    [fetchAsyncNewArrivals.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },

    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      return { ...state, allProducts: payload, loading: false };
    },
    [fetchAsyncProducts.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },

    [fetchAsyncProductForFilter.fulfilled]: (state, { payload }) => {
      return { ...state, allProducts: payload, loading: false };
    },
    [fetchAsyncProductForFilter.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },

    [fetchAsyncProductsDetails.fulfilled]: (state, { payload }) => {
      return { ...state, singleProduct: payload, loading: false };
    },
    [fetchAsyncProductsDetails.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },

    [fetchAsyncCategories.fulfilled]: (state, { payload }) => {
      return { ...state, allCategories: payload, loading: false };
    },
    [fetchAsyncCategories.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
  },
});

export default productSlice.reducer;
