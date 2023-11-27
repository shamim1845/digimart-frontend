import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./components/Routes";
import { useDispatch } from "react-redux";
import { fetchAsyncLoggedIn, fetchAsyncUser } from "./redux/user/userSlice";
import { ToastContainer } from "react-toastify";
import React from "react";
import Loading from "./components/utils/fetchUtils/Loading";

export const backendUrl = process.env.REACT_APP_SERVER_URL;
export const rate = {
  shipping: 10,
  tax: 5,
};

const App = () => {
  const dispatch = useDispatch();
  dispatch(fetchAsyncLoggedIn());
  dispatch(fetchAsyncUser());

  return (
    <>
      <ToastContainer />
      <React.Suspense fallback={<Loading />}>
        <Routes />
      </React.Suspense>
    </>
  );
};

export default App;
