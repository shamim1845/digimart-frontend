import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Routes from "./components/Route";
import { useDispatch } from "react-redux";

import { fetchAsyncCategories } from "./features/products/productSlice";
import { fetchAsyncLoggedIn, fetchAsyncUser } from "./features/user/userSlice";

// export const backendUrl = process.env.REACT_APP_SERVER_URL;
export const rate = {
  shipping: 1,
  tax: 0.5,
};

const App = () => {
  const dispatch = useDispatch();
  //
  useEffect(() => {
    dispatch(fetchAsyncCategories());
    dispatch(fetchAsyncUser());
    dispatch(fetchAsyncLoggedIn());
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
