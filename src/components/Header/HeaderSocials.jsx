import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/shubham-goel-395b361b2/" target="_blank">
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com/shubham21699" target="_blank">
        <FaGithub size={25} />
      </a>
      <a href="https://leetcode.com/shubham21699/" target="_blank">
        <SiLeetcode size={25} />
      </a>
      <a href="https://www.codechef.com/users/shubham21699" target="_blank">
        <SiCodechef size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
