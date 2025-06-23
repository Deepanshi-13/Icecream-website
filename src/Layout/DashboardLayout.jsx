import React from 'react'
import AdminNavbar from '../component/Admin/AdminNavbar/AdminNavbar';
import SideNavbar from "../component/Admin/SideNavbar/SideNavbar"
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
