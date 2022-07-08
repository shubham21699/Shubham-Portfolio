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
    title: "Hirezen | A service provider portal (Ongoing) [Team Project]",
    github: "https://github.com/YashKumar-0307/Hirezen",
    demo: "",
    // demo: "https://github.com/YashKumar-0307/Hirezen",
  },
  {
    id: 2,
    image: ouroom,
    title: "Ourooms | Communicate without any privacy issues [Team Project]",
    github: "https://github.com/shubham21699/OuRoom",
    demo: "https://ouroom.herokuapp.com/",
  },
  {
    id: 3,
    image: crypto,
    title: "Cryptocurrency Tracker",
    github: "https://github.com/shubham21699/Cryptocurrency-Tracker",
    demo: "https://cryptocurrency-tracker-c7e2d.web.app/",
  },
  {
    id: 4,
    image: tesla,
    title: "Tesla Landing Page Clone",
    github: "https://github.com/shubham21699/Tesla-WebApp-Clone",
    demo: "https://tesla-clone-d5ee2.web.app/",
  },
  {
    id: 5,
    image: extension,
    title: "Chrome Extension : Tab and Link Saver",
    github:
      "https://github.com/shubham21699/chrome-extension-tab-and-link-saver",
    demo: "",
    // demo: "https://github.com/shubham21699/chrome-extension-tab-and-link-saver",
  },
  {
    id: 6,
    image: candyCrush,
    title: "Candy Crush Game",
    github: "https://github.com/shubham21699/Candy-Crush",
    demo: "https://candy-crush-game-44136.web.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>{"<PROJECTS />"}</h2>
      <div className="container project__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
              <article key={id} className="project__item">
                <div className="project__item-image">
                  <img src={image} alt={title} />
                  <h4 style={{ margin: "3%" }}>{title}</h4>
                  <div className="project__item-cta">
                    <a href={github} className="btn gitLink" target="_blank">
                      Github
                    </a>
                    {demo.length > 0 && (
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Project
                      </a>
                    )}
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
