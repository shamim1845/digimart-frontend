import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
  category: "",
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
  },
});

export default productFilterSlice.reducer;
export const { addKeyword, addCategory } = productFilterSlice.actions;
