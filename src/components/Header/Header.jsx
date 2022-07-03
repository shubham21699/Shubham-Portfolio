import React from "react";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello! I'm</h4>
        <h1>Shubham Goel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <h5 className="text-light">
          Final Year Computer Engineering Undergrad at Thapar Institute of
          Engineering and Technology
        </h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={Me} alt="Me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll To Bottom
        </a>
      </div>
    </header>
  );
};

export default Header;
