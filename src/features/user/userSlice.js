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
const initialState = {
  authenticated: false,
  userInfo: {},
};

const userSlice = createSlice({
  name: "user info",
  initialState,
  reducers: {},
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
