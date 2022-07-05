import React from "react";
import CTA from "./CTA";
import Me from "../../assets/me.png";
import "./Header.css";
import HeaderSocials from "./HeaderSocials";
import ReactTypingEffect from "react-typing-effect";
import { MovingComponent } from "react-moving-text";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello! I'm</h4>
        <MovingComponent
          type="unfold"
          duration="1500ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <h1>Shubham Goel</h1>
        </MovingComponent>
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
