// AppLayout.jsx
import React, { useState } from "react";
import Navbar from "../component/NavBar/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main>
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
