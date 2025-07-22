import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from "react-router-dom";
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

const PrivateRoute = () => {

  const isAuth = localStorage.getItem("token");
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        {/* Login shown first */}
        <Route path="/login" element={<AuthPage />} />

        {/* Protected Routes */}
        <Route path="/" element={<PrivateRoute />}>
          <Route element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="flavorDetails/:id" element={<FlavorDetails />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="flavor" element={<Flavor />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customerManagement" element={<CustomerManagement />} />
            <Route path="flavorManagement" element={<FlavorManagement />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
