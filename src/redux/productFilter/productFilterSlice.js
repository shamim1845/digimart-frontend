import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
  category: "",
  price: {
    gte: null,
    lte: null,
  },
  page: 1,
  limit: 20,
};
const productFilterSlice = createSlice({
  name: "Product Filter",
  initialState,
  reducers: {
    addKeyword: (state, { payload }) => {
      state.keyword = payload;
    },
    addCategory: (state, { payload }) => {
      state.category = payload;
    },
    addPrice: (state, { payload }) => {
      state.price = payload;
    },
    addPage: (state, { payload }) => {
      state.page = payload;
    },
    addLimit: (state, { payload }) => {
      state.limit = payload;
    },
    clearFilter: (state) => {
      state.keyword = "";
      state.category = "";
      state.price = {
        gte: null,
        lte: null,
      };
      state.page = 1;
    },
  },
});

export default productFilterSlice.reducer;
export const {
  addKeyword,
  addCategory,
  addPrice,
  addPage,
  addLimit,
  clearFilter,
} = productFilterSlice.actions;
