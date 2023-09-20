import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// For Product Details
export const fetchAsyncProductsDetails = createAsyncThunk(
  "products/fetchAsyncProductDetails",
  async (id) => {
    const product = await axios.get(`/api/v1/product/${id}`);

    return product.data;
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
    [fetchAsyncProductsDetails.fulfilled]: (state, { payload }) => {
      return { ...state, singleProduct: payload, loading: false };
    },
    [fetchAsyncProductsDetails.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
  },
});

export default productSlice.reducer;
