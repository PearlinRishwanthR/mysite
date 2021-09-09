import{FaBars} from"react-icons/fa";
import React, { useState } from "react";
import {FcHome} from 'react-icons/fc'
import {RiCloseFill} from "react-icons/ri"
import {
  NavLink
} from './NavbarElements.jsx';

import "./style.css";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
        <NavLink to='/' >
        <FcHome/>
          </NavLink>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
        <li className="option" onClick={closeMobileMenu}>
        <NavLink to='/about' >
            About Me
          </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/education' >
           Education
          </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/projects' >
           Projects
          </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/work' >
           Work Experience
          </NavLink>
          </li>
          <li className="option" onClick={closeMobileMenu}>
          <NavLink to='/resume' >
           Resume
          </NavLink>
          
          </li>
        </ul>
      </div>
      
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <RiCloseFill className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;
