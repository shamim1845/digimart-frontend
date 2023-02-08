import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./admin/Admin";
import { ProtectedAdmin } from "./admin/ProtectedAdmin";
// import Hooks from "./hooks/Hooks";

// For Utils
import { ProtectedRoutes } from "./Auth/ProtectedRoutes";
import Loading from "./utils/Loading";

// For Home Routes
const LazyHome = React.lazy(() => import("./Home/Home"));

// For Auth Routes
const LazyRegister = React.lazy(() => import("./Auth/Register"));
const LazyLogin = React.lazy(() => import("./Auth/Login"));
const LazyForgotPassword = React.lazy(() => import("./Auth/ForgotPassword"));
const LazyResetPassword = React.lazy(() => import("./Auth/ResetPassword"));

// For User Account Routes
const LazyAccount = React.lazy(() => import("./account/Account"));
const LazyMyProfile = React.lazy(() => import("./account/MyProfile"));
const LazyUpdateProfile = React.lazy(() => import("./account/UpdateProfile"));
const LazyMyOrder = React.lazy(() => import("./account/order/MyOrder"));
const LazyOrderDetails = React.lazy(() =>
  import("./account/order/OrderDetails")
);

//For Admin Routes
const LazyDashboard = React.lazy(() => import("./admin/dashboard/Dashboard"));

// For Products Routes
const LazyAllProducts = React.lazy(() => import("./products/AllProducts"));
const LazyProductDetails = React.lazy(() =>
  import("./products/ProductDetails.js")
);

// For Order Routes
const LazyFavourite = React.lazy(() => import("./favourite/Favourite"));
const LazyCart = React.lazy(() => import("./cart/Cart"));
const LazyOrder = React.lazy(() => import("./order/Order"));
const LazyOrderSucess = React.lazy(() => import("./order/OrderSucess"));

// For Error Routes
const LazyError = React.lazy(() => import("./error/Error"));

const index = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {/* Home Routes */}
        <Route path="/" element={<LazyHome />} />

        {/* Auth Routes */}
        <Route path="/register" element={<LazyRegister />} />
        <Route path="/login" element={<LazyLogin />} />
        <Route path="/password/forgot" element={<LazyForgotPassword />} />
        <Route path="/password/reset/:token" element={<LazyResetPassword />} />

        {/* Account Routes  */}
        <Route
          path="/account"
          element={
            <ProtectedRoutes>
              <LazyAccount />
            </ProtectedRoutes>
          }
        >
          <Route path="myprofile" element={<LazyMyProfile />} />
          <Route path="updateprofile" element={<LazyUpdateProfile />} />
          <Route path="myorder" element={<LazyMyOrder />} />
          <Route path="orderDetails/:orderid" element={<LazyOrderDetails />} />
        </Route>

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedAdmin>
              <Admin />
            </ProtectedAdmin>
          }
        >
          <Route path="dashboard" element={<LazyDashboard />} />
          <Route path="invoices" element={<h1>InVoiceList</h1>} />
        </Route>

        {/* Product Routes */}
        <Route path="/products" element={<LazyAllProducts />} />
        <Route path="/products/:productId" element={<LazyProductDetails />} />

        {/* Product Order Routes */}
        <Route path="/favourite" element={<LazyFavourite />} />
        <Route path="/cart" element={<LazyCart />} />
        <Route path="/order" element={<LazyOrder />} />
        <Route path="/order/sucess" element={<LazyOrderSucess />} />

        {/* <Route path="/hooks" element={<Hooks />} /> */}

        {/* Error Routes  */}
        <Route path="*" element={<LazyError />} />
      </Routes>
    </React.Suspense>
  );
};

export default index;
