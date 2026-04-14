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
import Home from "./Navigation_Pages/Home";
import Store from "./Navigation_Pages/Store";
import About from "./Navigation_Pages/About";
import Layout from "./Layout/Layout";
import LayoutMain from "./Layout/LayoutMain";
import LayoutHome from "./Layout/LayoutHome";
import ContactUs from "./Navigation_Pages/ContactUs";
import ProductDetails from "./Navigation_Pages/ProductDetails";
import 'bootstrap-icons/font/bootstrap-icons.css';
const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: <LayoutMain />, 
        children: [
          { index: true, element: <Store /> },
          { path: "store", element: <Store /> },
          {path:"store/:id", element:<ProductDetails/>},
          
        ]
      },{
        element: <Layout/>, 
        children: [
          { path: "about", element: <About /> },
          {path:"contact_us", element:<ContactUs/>},
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
