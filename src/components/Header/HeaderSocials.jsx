import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import Tooltip from "@mui/material/Tooltip";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <Tooltip title="LinkedIn" placement="right" arrow>
        <a
          href="https://www.linkedin.com/in/shubham-goel-395b361b2/"
          target="_blank"
        >
          <BsLinkedin size={25} />
        </a>
      </Tooltip>
      <Tooltip title="GitHub" placement="right" arrow>
        <a href="https://github.com/shubham21699" target="_blank">
          <FaGithub size={25} />
        </a>
      </Tooltip>
      <Tooltip title="LeetCode" placement="right" arrow>
        <a href="https://leetcode.com/shubham21699/" target="_blank">
          <SiLeetcode size={25} />
        </a>
      </Tooltip>
      <Tooltip title="CodeChef" placement="right" arrow>
        <a href="https://www.codechef.com/users/shubham21699" target="_blank">
          <SiCodechef size={25} />
        </a>
      </Tooltip>
    </div>
  );
};

export default HeaderSocials;
