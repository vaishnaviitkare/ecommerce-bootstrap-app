import React, {useContext} from "react";
import '../components/Header.css';
import { NavLink } from "react-router-dom";
const HeaderCommon=(props)=>{
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

        </nav>
  </div>
   )
}
export default HeaderCommon;