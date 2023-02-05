import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Routes from "./components/Route";
import { useDispatch } from "react-redux";
import { addAuth } from "./features/auth/authSlice";

import axios from "axios";
import { fetchAsyncCategories } from "./features/products/productSlice";

// export const backendUrl = process.env.REACT_APP_SERVER_URL;
export const rate = {
  shipping: 1,
  tax: 0.5,
};

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`/api/v1/loggedin`, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        if (data?.status) {
          dispatch(addAuth(true));
        }
      });
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <React.StrictMode>
      <Header />
      <Routes />
      <Footer />
    </React.StrictMode>
  );
};

export default App;
