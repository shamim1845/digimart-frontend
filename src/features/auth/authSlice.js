import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
};

const authSlice = createSlice({
  name: "client auth",
  initialState,
  reducers: {
    addAuth: (state, { payload }) => {
      state.authenticated = payload;
    },
  },
});

export const { addAuth } = authSlice.actions;
export default authSlice.reducer;
