import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
// Pages
import Home from "./Navigation_Pages/Home";
import Store from "./Navigation_Pages/Store";
import About from "./Navigation_Pages/About";
import ContactUs from "./Navigation_Pages/ContactUs";
import ProductDetails from "./Navigation_Pages/ProductDetails";
import Login from "./Navigation_Pages/Login";

// Layouts
import Layout from "./Layout/Layout";
import LayoutMain from "./Layout/LayoutMain";
import LayoutHome from "./Layout/LayoutHome";
import AuthContext from "./Context/auth-context";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useContext } from "react";
const AppRouter = () => {
 const authCtx=useContext(AuthContext);
const router = createBrowserRouter([
  {
      path: "/",
      children: [
        {
          element: <LayoutMain />,
          children: [
            {
              path: "store",                        
              element: authCtx.isLoggedIn ? (
                <Store />
              ) : (
                <Navigate to="/login" replace />
              ),
            },
            {
              path: "store/:id",
              element: authCtx.isLoggedIn ? (
                <ProductDetails />
              ) : (
                <Navigate to="/login" replace />
              ),
            },
          ],
        },
      {
        element: <Layout />,
        children: [
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact_us",
            element: <ContactUs />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        element: <LayoutHome />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);

  return <RouterProvider router={router} />;
};
export default AppRouter;