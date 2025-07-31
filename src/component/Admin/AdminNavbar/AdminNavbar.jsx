import React from "react";
import "../AdminNavbar/AdminNavbar.css";
import icecream from "../../../assets/ice-cream.png";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu as AntMenu } from "antd";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    toast.success("Logged out successfully!", {
      autoClose: 1500,
      onClose: () => navigate("/login"),
    });
  };

  const userMenu = (
    <AntMenu>
      <AntMenu.Item
        key="logout"
        icon={<LogoutOutlined />}
        onClick={handleLogout}
      >
        Logout
      </AntMenu.Item>
    </AntMenu>
  );

  return (
    <>
      <nav className="admin-navbar">
        <div className="navbar-left">
          <img src={icecream} alt="ice-cream" />
          <div className="navbar-logo">ScoopieDoo</div>
        </div>

        <div className="navbar-right">
          <Dropdown overlay={userMenu} placement="bottomRight">
            <Avatar
              style={{
                backgroundColor: "green",
                cursor: "pointer",
                marginLeft:"60rem",
                padding:"1.4rem"
              }}
            >
              {username ? username[0].toUpperCase() : <UserOutlined />}
            </Avatar>
          </Dropdown>
        </div>

        <ToastContainer position="top-center" autoClose={3000} />
      </nav>
    </>
  );
};

export default AdminNavbar;
