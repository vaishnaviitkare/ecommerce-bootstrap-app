import React, { useContext,useEffect } from "react";
import './Header.css';
import { ModalCon } from "../Context/ModalContext";
import { Button } from "react-bootstrap";
import { DataCon } from "../Context/DataContext";
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/auth-context";

const Header = (props) => {
  const { openModal } = useContext(ModalCon);
  const { data, fetchCartItems } = useContext(DataCon);
  const authCtx = useContext(AuthContext);

  useEffect(() => {
  if (authCtx.isLoggedIn) {
    fetchCartItems();
  }
}, [authCtx.isLoggedIn]);

  const handleCartClick = () => {
    fetchCartItems(); // GET request fires every time cart button is clicked
    openModal();
  };

  return (
    <div className="div1">
      {/* Center Menu */}
      <nav className="navb">
        <NavLink
          to="/home"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Home
        </NavLink>
        {authCtx.isLoggedIn && (
          <li>
            <NavLink
              to="/store"
              className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
            >
              Store
            </NavLink>
          </li>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          About
        </NavLink>

        <NavLink
          to="/contact_us"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Contact Us
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          Login
        </NavLink>

        {/* Cart Button Right */}
        <div className="cart-wrapper">
          <Button variant="outline-info" onClick={handleCartClick}>
            cart
          </Button>
          <span className="cart-button">{data.length}</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;