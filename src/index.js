import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ModalContext } from "./Context/ModalContext";
import { DataContext } from "./Context/DataContext";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// pages
import Home from "./Navigation/Home";
import Store from "./Navigation/Store";
import About from "./Navigation/About";
import Layout from "./Layout/Layout";
import LayoutMain from "./Layout/LayoutMain";
import LayoutHome from "./Layout/LayoutHome";
import 'bootstrap-icons/font/bootstrap-icons.css';
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      // Store layout
      {
        element: <LayoutMain />, // HeaderStore
        children: [
          { index: true, element: <Store /> },
          { path: "store", element: <Store /> }
        ]
      },

      // Common layout
      {
        element: <Layout />, // HeaderCommon
        children: [
          { path: "about", element: <About /> }
        ]
      },
      {
        element: <LayoutHome />, 
        children: [
          { path: "home", element: <Home /> },
        ]
      }

    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DataContext>
      <ModalContext>
        <RouterProvider router={router} />
      </ModalContext>
    </DataContext>
  </React.StrictMode>
);
