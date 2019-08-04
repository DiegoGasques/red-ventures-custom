import React from "react";
import logo from "./assets/logo.svg";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <header className="NavBar">
      <h1 className="NavBar__logo">
        <img src={logo} alt="Red Ventures" />
      </h1>
      <nav className="NavBar__nav">
        <ul className="NavBar__list">
          <li className="NavBar__item active">Model R</li>
          <li className="NavBar__item">Model IQ</li>
          <li className="NavBar__item">Model Mobi</li>
          <li className="NavBar__item">Model Charlie</li>
          <li className="NavBar__item">Model Italy</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
