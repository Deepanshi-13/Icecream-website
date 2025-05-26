import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import AppLayout from "../Layout/AppLayout";
import FlavorDetails from "../component/Flavor/FlavorDetails";

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
        path:"flavorDetails",
        element:<FlavorDetails/>
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
