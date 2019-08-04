import React from "react";
import logo from "../../assets/logo.svg";

export const NavBar = () => {
  return (
    <header className="NavBar">
      <h1 className="logo">
        <img src={logo} alt="Red Ventures" />
      </h1>
      <nav className="nav">
        <ul className="list">
          <li className="item active">Model R</li>
          <li className="item">Model IQ</li>
          <li className="item">Model Mobi</li>
          <li className="item">Model Charlie</li>
          <li className="item">Model Italy</li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
