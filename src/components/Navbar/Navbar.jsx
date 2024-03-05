import React, { Component } from "react";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import "./Navbar.scss";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="menu-toggle" onClick={toggleMenu}>
            ☰{" "}
          </div>

          <ul className={`nav-links ${showMenu ? "show" : ""}`}>
            <form className="search">
              <div className="CiSearch">
                <CiSearch />
              </div>

            
            </form>

            <li className="Categories">Categories</li>
            <li className="Website_Builders">Website Builders</li>
            <li className="Today_deals">Today's deals</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
