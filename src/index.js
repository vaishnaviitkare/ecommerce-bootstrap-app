import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap-icons/font/bootstrap-icons.css";

import { ModalContext } from "./Context/ModalContext";
import { DataContext } from "./Context/DataContext";
import { AuthContextProvider } from "./Context/auth-context";

import AppRouter from "./AppRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataContext>
        <ModalContext>
          <AppRouter />
        </ModalContext>
      </DataContext>
    </AuthContextProvider>
  </React.StrictMode>
);