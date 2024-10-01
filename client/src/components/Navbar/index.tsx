import "./styles.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { minScroll, useScroll } from "~/utilities/useScroll";

interface NavbarProps {
  scrollHome?: () => void;
  scrollProj?: () => void;
  scrollExp?: () => void;
}

export function Navbar({ scrollHome, scrollProj, scrollExp }: NavbarProps) {
  const [expanded, setExpanded] = useState(false);
  const [animating, setAnimating] = useState(false);

  const { stuck } = useScroll(minScroll);

  const expandMobileNav = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), expanded ? 350 : 50);
    setExpanded(expanded => !expanded);
  };

  return (
    <nav
      className={`navbar navbar-expand-xl navbar-inho 
          ${expanded ? "mobile-expanded" : ""} 
          ${stuck ? "stuck" : ""}`}
    >
      <Link to="/" className="navbar-brand flex-fill nav-icon">
        <img
          src={`${process.env.PUBLIC_URL}/inhostudiosicon.png`}
          alt="logo"
          height="48"
        />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
        onClick={expandMobileNav}
      >
        <span>
          <FontAwesomeIcon icon={expanded ? faXmark : faBars} />
        </span>
      </button>
      <div
        className={`navbar-collapse 
          ${expanded ? "show" : "hidden"} 
          ${animating ? "collapsing" : "collapse"}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              onClick={e => {
                scrollHome && e.preventDefault();
                scrollHome && scrollHome();
              }}
              className="nav-link"
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#projects"
              onClick={e => {
                scrollProj && e.preventDefault();
                scrollProj && scrollProj();
              }}
              className="nav-link"
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="#experience"
              onClick={e => {
                scrollExp && e.preventDefault();
                scrollExp && scrollExp();
              }}
              className="nav-link"
            >
              Experience
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
