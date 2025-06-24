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
import SalesTracking from "../component/Admin/SalesTracking/SalesTracking";
import InventoryMangement from "../component/Admin/InventoryManagement/InventoryMangement";
import DashboardLayout from "../Layout/DashboardLayout";

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
          </Route>
          <Route  element={<DashboardLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customerManagement" element={<CustomerManagement />} />
            <Route path="flavorManagement" element={<FlavorManagement />} />
            <Route path="inventory" element={<InventoryMangement />} />
            <Route path="sales" element={<SalesTracking />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
