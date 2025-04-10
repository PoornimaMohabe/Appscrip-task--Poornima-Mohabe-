import React from 'react';
import frame from "../assets/images/Frame 34.png"
import logo from "../assets/images/Logo.png"
import icons from "../assets/images/Icons.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="GreyStrip">
        <img src={frame} alt="Feature icon" className="Feature-icon" />
        <img src={frame} alt="Feature icon" className="Feature-icon" />
        <img src={frame} alt="Feature icon" className="Feature-icon" />
      </div>
      <header className="header">
        <div className="header_icons">
          <div className="Logo_Icon">
            <img src={logo} alt="App Logo" />
          </div>
          <div className="Logo_text">LOGO</div>
          <div className="Feature_Icons">
            <img src={icons} alt="Feature icons" />
          </div>
        </div>
        <div className="Header_Options">
          <div className="headerOption_child">
            <ul className="options">
              <li>SHOP</li>
              <li>SKILLS</li>
              <li>STORIES</li>
              <li>ABOUT</li>
              <li>CONTACT US</li>
            </ul>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;