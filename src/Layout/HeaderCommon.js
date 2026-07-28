import React, {useContext} from "react";
import '../components/Header.css';
import { NavLink } from "react-router-dom";
import AuthContext from "../Context/auth-context";
const HeaderCommon=(props)=>{
  const authCtx=useContext(AuthContext);
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

      <NavLink
              to="/contact_us"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              Contact Us
      </NavLink>

      <NavLink
              to="/login"
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
             Login
      </NavLink>
      

        </nav>
  </div>
   )
}
export default HeaderCommon;