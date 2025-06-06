import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";

const Login = () => {
  const onFinish = (values) => {
    const { username, password } = values;

    if (
      /^[A-Z][a-zA-Z]{7,}$/.test(username) &&
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password)
    ) {
      toast.success("Logged in!", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "colored",
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

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox style={{ color: "#ff69b4" }}>Remember me</Checkbox>
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
