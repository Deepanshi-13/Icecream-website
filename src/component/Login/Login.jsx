import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }else{
      navigate('/login');
    }
  }, []);

  const onFinish = (values) => {
    const { username, password } = values;

    if (
      /^[A-Z][a-zA-Z]{7,}$/.test(username) &&
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)
    ) {
      localStorage.setItem("token", "true");
      localStorage.setItem("username", username);

      toast.success("Logged in!", {
        autoClose: 2000,
        theme: "colored",
        onClose: () => navigate("/"),
      });
    } else {
      toast.error("Invalid username or password format!");
    }
  };

  return (
    <div className="login-container">
      <h1>🍦 Welcome to ScoopieDoo!</h1>
      <p className="login-tagline">
        Please log in to order your favorite flavors.
      </p>

      <Form name="loginForm" layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            { required: true, message: "Please enter your username!" },
            {
              pattern: /^[A-Z][a-zA-Z]{7,}$/,
              message: "Start with capital & min 8 letters.",
            },
          ]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please enter your password!" },
            {
              pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
              message: "Min 8 chars with uppercase, number & special char.",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default Login;
