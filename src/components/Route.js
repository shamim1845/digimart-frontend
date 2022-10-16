import React from 'react';
import {Routes, Route} from "react-router-dom";
import Hooks from './hooks/Hooks';

import { ProtectedRoutes } from './Auth/ProtectedRoutes';
import Home from './Home/Home';
import Loading from './utils/Loading';
const LazyAccount = React.lazy(() => import('./account/Account'));
const LazyForgotPassword = React.lazy(() => import('./Auth/ForgotPassword'));
const LazyRegister = React.lazy(() => import('./Auth/Register'));
const LazyLogin = React.lazy(() => import('./Auth/Login'));
const LazyResetPassword = React.lazy(() => import('./Auth/ResetPassword'));
const LazyCart = React.lazy(() => import('./cart/Cart'));
const LazyAllProducts = React.lazy(() => import('./products/AllProducts'));
const LazyDashboard = React.lazy(() => import('./dashboard/Dashboard'));
const LazyProductDetails = React.lazy(() => import('./products/ProductDetails.js'));
const LazyFavourite = React.lazy(() => import("./favourite/Favourite"))
const LazyError = React.lazy(() => import( './error/Error'));
const LazyOrder = React.lazy(() => import( './order/Order'));
const LazyOrderSucess = React.lazy(() => import( './order/OrderSucess'));



const index = () => {
    return (
        <React.Suspense fallback= {<Loading />}>
        <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<LazyAllProducts />} />
            <Route path="/products/:productId" element={<LazyProductDetails />} />
                   
            <Route path="/dashboard" element={<LazyDashboard />}> 
                 <Route index element={<h1>DashboardGraphs</h1>} />
                 <Route path="invoices" element={<h1>InVoiceList</h1>} />
            </Route>

            <Route path="/hooks" element={<Hooks />} /> 
            <Route path="/register" element={<LazyRegister />} />
            <Route path="/login" element={<LazyLogin />} />
            <Route path="/password/forgot" element={<LazyForgotPassword />} />
            <Route path="/password/reset/:token" element={<LazyResetPassword />} />
            <Route path="/account" element={<ProtectedRoutes><LazyAccount /></ProtectedRoutes>} />
            <Route path="/favourite" element={<LazyFavourite />} />
            <Route path="/cart" element={<LazyCart />} />
            <Route path="/order" element={<LazyOrder />} />
            <Route path="/order/sucess" element={<LazyOrderSucess />} />
            <Route path="*" element={<LazyError />} /> 
                
           
        </Routes>
        </React.Suspense>
    )
}

export default index
