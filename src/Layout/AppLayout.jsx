// AppLayout.jsx
import React from "react";
import Navbar from "../component/NavBar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer/Footer";

const AppLayout = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default AppLayout;
