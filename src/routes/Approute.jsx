import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Home from "../Pages/Home.jsx";
import Shop from "../Pages/Shop.jsx";
import About from "../Pages/About.jsx";
import Contact from "../Pages/Contact.jsx";
import Profile from "../Pages/Profile.jsx";
import AppLayout from "../Layout/AppLayout.jsx";
import FlavorDetails from "../component/Flavor/FlavorDetails.jsx";
import AuthPage from "../Pages/AuthPage.jsx";
import Dashboard from "../component/Admin/Dashboard/Dashboard.jsx";
import CustomerManagement from "../component/Admin/CustomerManagement/CustomerManagement.jsx";
import FlavorManagement from "../component/Admin/FlavorManagement/FlavorManagement.jsx";
import DashboardLayout from "../Layout/DashboardLayout.jsx";
import Flavor from "../component/Flavor/Flavor.jsx";
import Checkout from "../component/Checkout/Checkout.jsx";

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
              <Route path="/adminProfile" element={<Profile />} />
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
              <Route path="/profile" element={<Profile />} />
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
