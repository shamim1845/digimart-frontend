import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Admin from "./admin/Admin";
import { ProtectedAdmin } from "./utils/authUtils/ProtectedAdmin";
// import Hooks from "./hooks/Hooks";

// For Utils
import { ProtectedRoutes } from "./utils/authUtils/ProtectedRoutes";
import Loading from "./utils/fetchUtils/Loading";

// For Layout
const LazyLayout = React.lazy(() => import("./layout/Layout"));

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
const LazyAdminDashboard = React.lazy(() =>
  import("./admin/routes/dashboard/Dashboard")
);
const LazyAdminAllProducts = React.lazy(() =>
  import("./admin/routes/products/allProducts/AllProduct")
);
const LazyAdminCreateProduct = React.lazy(() =>
  import("./admin/routes/products/CreateProduct")
);
const LazyAdminCategories = React.lazy(() =>
  import("./admin/routes/categories/Categories")
);
const LazyAdminBrand = React.lazy(() => import("./admin/routes/brand/Brand"));

const LazyAdminOrders = React.lazy(() =>
  import("./admin/routes/orders/Orders")
);
const LazyAdminUsers = React.lazy(() => import("./admin/routes/users/Users"));
const LazyAdminReviews = React.lazy(() =>
  import("./admin/routes/reviews/Reviews")
);

// For Products Routes
const LazyAllProducts = React.lazy(() => import("./products/AllProducts"));
const LazyProductDetails = React.lazy(() =>
  import("./products/product/ProductDetails")
);

// For Order Routes
const LazyFavourite = React.lazy(() => import("./favourite/Favourite"));
const LazyCart = React.lazy(() => import("./cart/Cart"));
const LazyOrder = React.lazy(() => import("./order/Order"));
const LazyOrderSucess = React.lazy(() => import("./order/OrderSucess"));

// For Error Routes
const LazyError = React.lazy(() => import("./error/ErrorPage"));

const index = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {/* User Routes */}
        <Route
          path="/"
          element={
            <LazyLayout>
              <Outlet />
            </LazyLayout>
          }
        >
          {/* Home Routes */}
          <Route index element={<LazyHome />} />

          {/* Auth Routes */}
          <Route path="register" element={<LazyRegister />} />
          <Route path="/login" element={<LazyLogin />} />
          <Route path="/password/forgot" element={<LazyForgotPassword />} />
          <Route
            path="/password/reset/:token"
            element={<LazyResetPassword />}
          />

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
            <Route
              path="orderDetails/:orderid"
              element={<LazyOrderDetails />}
            />
          </Route>

          {/* Product Routes */}
          <Route path="/products" element={<LazyAllProducts />} />
          <Route path="/products/:productId" element={<LazyProductDetails />} />

          {/* Product Order Routes */}
          <Route path="/favourite" element={<LazyFavourite />} />
          <Route path="/cart" element={<LazyCart />} />
          <Route path="/order" element={<LazyOrder />} />
          <Route path="/order/sucess" element={<LazyOrderSucess />} />

          {/* Error Routes  */}
          <Route path="*" element={<LazyError />} />
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
          <Route index element={<Navigate to={"/admin/dashboard"} />} />
          {/* Dashboard */}
          <Route path="dashboard" element={<LazyAdminDashboard />} />
          {/* Product */}
          <Route path="products" element={<LazyAdminAllProducts />} />
          <Route path="products/create" element={<LazyAdminCreateProduct />} />
          {/* Categories */}
          <Route path="categories" element={<LazyAdminCategories />} />
          {/* Brand */}
          <Route path="brand" element={<LazyAdminBrand />} />

          {/* Orders */}
          <Route path="orders" element={<LazyAdminOrders />} />
          {/* Users */}
          <Route path="users" element={<LazyAdminUsers />} />
          {/* Reviews */}
          <Route path="reviews" element={<LazyAdminReviews />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
};

export default index;
