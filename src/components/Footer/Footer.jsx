import React from "react";
import "./Footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__socials">
        <h3>{"< My Profiles : "}</h3>
        <Tooltip title="LinkedIn" placement="top">
          <a
            href="https://www.linkedin.com/in/shubham-goel-395b361b2/"
            target="_blank"
          >
            <FaLinkedinIn size={30} />
          </a>
        </Tooltip>
        <Tooltip title="GitHub" placement="top">
          <a href="https://github.com/shubham21699" target="_blank">
            <FaGithub size={30} />
          </a>
        </Tooltip>
        <Tooltip title="LeetCode" placement="top">
          <a href="https://leetcode.com/shubham21699/" target="_blank">
            <SiLeetcode size={30} />
          </a>
        </Tooltip>
        <Tooltip title="CodeChef" placement="top">
          <a href="https://www.codechef.com/users/shubham21699" target="_blank">
            <SiCodechef size={30} />
          </a>
        </Tooltip>
        <h3>{" />"}</h3>
      </div>
    </footer>
  );
};

export default Footer;
