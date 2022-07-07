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

const Skills = () => {
  return (
    <section id="skills">
      <h2>{"<SKILLS />"}</h2>
      <Fade left>
        <div className="skill">
          <img src={cpp} alt="cpp" className="cpp" />
          <img src={html} alt="html" className="html" />
          <img src={css} alt="css" className="css" />
          <img src={js} alt="js" className="js" />
          <img src={react} alt="react" className="react" />
          <img src={git} alt="git" className="git" />
          <img src={github} alt="github" className="github" />
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
