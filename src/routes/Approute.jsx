import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AppLayout from "../Layout/AppLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        index: true,     
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};

export default AppRoute;
