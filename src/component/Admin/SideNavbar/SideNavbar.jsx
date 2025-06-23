// components/SideNavbar.js
import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  AppstoreOutlined,
  DatabaseOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom"
const { Sider } = Layout;

const SideNavbar = ({ onSelect }) => {
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
      >
        <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
          <Link to="/admin/dashboard"> Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="customers" icon={<UserOutlined />}>
          <Link to="/admin/customerManagement">Customer Management</Link>
        </Menu.Item>
        <Menu.Item key="flavors" icon={<AppstoreOutlined />}>
          <Link to="/admin/flavorManagement">Flavor Management</Link>
        </Menu.Item>
        <Menu.Item key="inventory" icon={<DatabaseOutlined />}>
          <Link to="/admin/inventory">Inventory Management</Link>
        </Menu.Item>
        <Menu.Item key="sales" icon={<LineChartOutlined />}>
          <Link to="/admin/sales"> Sales Tracking</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideNavbar;
