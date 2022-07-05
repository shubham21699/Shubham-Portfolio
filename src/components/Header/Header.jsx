import React from "react";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import ReactTypingEffect from "react-typing-effect";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello! I'm</h4>
        <h1>Shubham Goel</h1>
        <ReactTypingEffect
          speed={50}
          eraseSpeed={10}
          typingDelay={10}
          eraseDelay={1000}
          className="text-light"
          text={[
            "Frontend Developer",
            "Final Year Computer Engineering Undergrad at Thapar Institute of Engineering and Technology",
          ]}
        />
        <CTA />
        <HeaderSocials />
        <div className="me__profile">
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
