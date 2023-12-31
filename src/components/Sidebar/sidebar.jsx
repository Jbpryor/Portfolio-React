import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.scss";
import LogoB from "../../assets/images/logo-b.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser, faBriefcase, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { faFreeCodeCamp, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoB} alt="logo" />
      <img className="sub-logo" src={LogoSubtitle} alt="b_rent" />
    </Link>
    <nav>
      <NavLink 
      activeclassname="active" 
      to="/">
        <FontAwesomeIcon icon={faHome} color="4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faBriefcase} color="4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="certificates-link"
        to="/certificates"
      >
        <FontAwesomeIcon icon={faCertificate} color="4d4d4e" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jbp74135/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Jbpryor"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.freecodecamp.org/Jpryor06"
        >
          <FontAwesomeIcon icon={faFreeCodeCamp} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
);

export default Sidebar;
