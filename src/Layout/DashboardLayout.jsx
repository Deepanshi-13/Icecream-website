import React from 'react'
import AdminNavbar from '../component/Admin/AdminNavbar/AdminNavbar.jsx';
import SideNavbar from "../component/Admin/SideNavbar/SideNavbar.jsx"
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
  return (
    <>
     <AdminNavbar/>
      <SideNavbar/>
      <Outlet/>
    </>
  )
}

export default DashboardLayout
