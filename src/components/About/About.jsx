import React from "react";
import "./About.css";
import Me from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { RiBookOpenLine } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>{"<ABOUT ME />"}</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <RiBookOpenLine className="about__icon" />
              <h5>Education</h5>
              <small>Bachelor's in Computer Engineering</small>
            </article>
          </div>
          <p>
            Currently a Final Year Undergrad at Thapar Institute of Engineering
            and Technology with major in Computer Engineering. Also a Frontend
            Developer and also holds passion for learning new Technologies.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
