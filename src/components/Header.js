import React, {useContext} from "react";
import './Header.css';
import { ModalCon } from "../Context/ModalContext";
import { Button} from "react-bootstrap";
import { DataCon } from "../Context/DataContext";
import { NavLink } from "react-router-dom";
const Header=(props)=>{
const {openModal}=useContext(ModalCon);                                                           
const {data}=useContext(DataCon);
   return(
    <div className="div1">
        {/* Center Menu */}
      <nav className="navb">
      <NavLink
        to="/home"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/store"
       className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        Store
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `nav-item ${isActive ? "active" : ""}`
        }
      >
        About
      </NavLink>

        {/* Cart Button Right */}
        <div className="cart-wrapper">
        <Button
          variant="outline-info"
          onClick={openModal}
        >
          cart 
        </Button>
        <span className="cart-button">{data.length}</span>
        </div>
        </nav>
  </div>
   )
}
export default Header;