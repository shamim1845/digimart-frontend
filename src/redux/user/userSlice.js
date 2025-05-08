import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

// initial state
const initialState = {
  authenticated: false,
  userInfo: {},
  currency: "BDT",
};

// Slice for handling user information
const userSlice = createSlice({
  name: "user-info",
  initialState,
  reducers: {
    addCurrency: (state, { payload }) => {
      return { ...state, currency: payload };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncLoggedIn.fulfilled, (state, { payload }) => {
        return { ...state, authenticated: payload };
      })
      .addCase(fetchAsyncUser.fulfilled, (state, { payload }) => {
        return { ...state, userInfo: payload };
      });
  },
});

export default userSlice.reducer;

export const { addCurrency } = userSlice.actions;
