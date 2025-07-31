import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Approute from "./routes/Approute";
import "./App.css";
import { ToastContainer } from "react-toastify";



const App = () => {
  return (
    <>
      <Approute />
      <ToastContainer position="top-right" autoClose={1000} />

    </>
  );
};

export default App;
