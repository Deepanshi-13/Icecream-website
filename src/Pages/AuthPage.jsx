import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AuthPage.css";
import { signUpWithEmail, signInWithEmail } from "../firebase/Firebase";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;

    try {
      if (isLogin) {
        const user = await signInWithEmail(email, password);
        toast.success("Logged in successfully!");
        localStorage.setItem("token",user.uid)
        navigate("/")
        console.log("Logged in:", user);
      } else {
        const user = await signUpWithEmail(email, password);
        toast.success("Account created successfully!");
        console.log("User created:", user);
      }
      form.resetFields();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    }
  };

  const onFinishFailed = () => {
    toast.error("Please fill in all required fields.");
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login to Account" : "Create Account"}</h2>

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="auth-form"
      >
        {!isLogin && (
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Enter username" />
          </Form.Item>
        )}

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters" },
          ]}
        >
          <Input.Password placeholder="Enter password" />
        </Form.Item>

        <Form.Item>
          <Button type="HotPink" htmlType="submit" block className="auth-btn">
            {isLogin ? "Login" : "Sign Up"}
          </Button>
        </Form.Item>
      </Form>

      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>

      <ToastContainer position="top-center" />
    </div>
  );
};

export default AuthPage;
