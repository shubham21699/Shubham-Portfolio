import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin size={25} />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub size={25} />
      </a>
      <a href="https://instagram.com" target="_blank">
        <FaInstagram size={25} />
      </a>
    </div>
  );
};

export default HeaderSocials;
