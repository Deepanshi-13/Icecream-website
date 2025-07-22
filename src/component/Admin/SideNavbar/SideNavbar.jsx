// components/SideNavbar.jsx
import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const SideNavbar = ({ onSelect }) => {
  const menuItems = [
    {
      key: "dashboard",
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: "customers",
      icon: <UserOutlined />,
      label: <Link to="/customerManagement">Customer Management</Link>,
    },
    {
      key: "flavors",
      icon: <AppstoreOutlined />,
      label: <Link to="/flavorManagement">Flavor Management</Link>,
    },
    
  ];

  return (
    <Sider
      width={220}
      style={{
        background: "#fefefe",
        borderRight: "1px solid #eee",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        boxShadow: "2px 0 8px rgba(0, 0, 0, 0.05)",
      }}
    >
      <div
        style={{
          height: 64,
          margin: 16,
          fontSize: 22,
          fontWeight: "bold",
          color: "#ff69b4",
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        🍦 ScoopieDoo
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={["dashboard"]}
        style={{
          background: "#fefefe",
          borderRight: "none",
        }}
        onClick={({ key }) => onSelect(key)}
        items={menuItems} 
      />
    </Sider>
  );
};

export default SideNavbar;
