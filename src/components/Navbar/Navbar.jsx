import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { MdLaptopMac } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import Tooltip from "@mui/material/Tooltip";
import Fade from "react-reveal/Fade";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <Fade top>
        <Tooltip title="Home" placement="top" arrow>
          <a
            href="#"
            onClick={() => setActiveNav("#")}
            className={activeNav === "#" ? "active" : ""}
          >
            <AiOutlineHome />
          </a>
        </Tooltip>
        <Tooltip title="About" placement="top" arrow>
          <a
            href="#about"
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}
          >
            <AiOutlineUser />
          </a>
        </Tooltip>
        <Tooltip title="Skills" placement="top" arrow>
          <a
            href="#skills"
            onClick={() => setActiveNav("#skills")}
            className={activeNav === "#skills" ? "active" : ""}
          >
            <BiBook />
          </a>
        </Tooltip>
        <Tooltip title="Projects" placement="top" arrow>
          <a
            href="#projects"
            onClick={() => setActiveNav("#projects")}
            className={activeNav === "#projects" ? "active" : ""}
          >
            <MdLaptopMac />
          </a>
        </Tooltip>
        <Tooltip title="Contact" placement="top" arrow>
          <a
            href="#contact"
            onClick={() => setActiveNav("#contact")}
            className={activeNav === "#contact" ? "active" : ""}
          >
            <BiMessageSquareDetail />
          </a>
        </Tooltip>
      </Fade>
    </nav>
  );
};

export default Navbar;
