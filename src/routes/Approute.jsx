import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";

import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AppLayout from "../Layout/AppLayout";
import FlavorDetails from "../component/Flavor/FlavorDetails";
import AuthPage from "../Pages/AuthPage";
import Dashboard from "../component/Admin/Dashboard/Dashboard";
import CustomerManagement from "../component/Admin/CustomerManagement/CustomerManagement";
import FlavorManagement from "../component/Admin/FlavorManagement/FlavorManagement";
import DashboardLayout from "../Layout/DashboardLayout";
import Flavor from "../component/Flavor/Flavor";
import Checkout from "../component/Checkout/Checkout";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const AdminRoute = () => {
  const role = localStorage.getItem("role");
  return role === "admin" ? <Outlet /> : <Navigate to="/" />;
};


const UserRoute = () => {
  const role = localStorage.getItem("role");
  return role === "user" ? <Outlet /> : <Navigate to="/dashboard" />;
};


const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthPage />} />

        {/* Admin Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<AdminRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customerManagement" element={<CustomerManagement />} />
              <Route path="/flavorManagement" element={<FlavorManagement />} />
            </Route>
          </Route>
        </Route>

        {/* User Routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<UserRoute />}>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/flavorDetails/:id" element={<FlavorDetails />} />
              <Route path="/flavor" element={<Flavor />} />
              <Route path="/checkout" element={<Checkout />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
