import React from "react";
import "./Skills.css";
import cpp from "../../assets/cpp.png";
import html from "../../assets/html.webp";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.jpg";
import github from "../../assets/github.png";
import Fade from "react-reveal/Fade";
import FloatingComponent from "react-floating-component";

const Skills = () => {
  return (
    <section id="skills">
      <h2>{"<SKILLS />"}</h2>
      <Fade left>
        <div className="skill">
          <FloatingComponent>
            <img src={cpp} alt="cpp" className="cpp" />
          </FloatingComponent>
          <FloatingComponent>
            <img src={html} alt="html" className="html" />
          </FloatingComponent>
          <FloatingComponent>
            <img src={css} alt="css" className="css" />
          </FloatingComponent>
          <FloatingComponent>
            <img src={js} alt="js" className="js" />
          </FloatingComponent>
          <FloatingComponent>
            <img src={react} alt="react" className="react" />
          </FloatingComponent>
          <FloatingComponent>
            <img src={git} alt="git" className="git" />
          </FloatingComponent>
          <FloatingComponent>
            <img src={github} alt="github" className="github" />
          </FloatingComponent>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
