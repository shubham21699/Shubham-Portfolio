import React from "react";
import "./Projects.css";
import hirezen from "../../assets/hirezen.png";
import ouroom from "../../assets/ouroom.png";
import crypto from "../../assets/crypto.png";
import tesla from "../../assets/tesla.png";
import extension from "../../assets/extension.png";
import expense from "../../assets/expense.png";
import candyCrush from "../../assets/candyCrush.png";

const data = [
  {
    id: 1,
    image: hirezen,
    title: "Hirezen",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: ouroom,
    title: "Hirezen",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: crypto,
    title: "Hirezen",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: tesla,
    title: "Hirezen",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: extension,
    title: "Hirezen",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: expense,
    title: "Hirezen",
    github: "https://github.com",
    demo: "https://github.com",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
                <h3>{title}</h3>
                <div className="project__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
