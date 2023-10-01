import React from "react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <div className="turnerNavbar">
      <a href="/">
        <img className="turnerLogo" src="turnerslogo.png" alt="" />
      </a>
      <div className="navLinks">
        <a className="links" href="/">
          Home
        </a>
        <a
          className="links"
          href="https://www.turners.co.nz/Company/About-Us/Overview/"
        >
          About
        </a>
        <a className="links" href="">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
