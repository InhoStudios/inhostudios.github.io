import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./styles.scss";

export interface PageNavProps {
  page: number;
  numPages: number;
  updatePage: (dir: number) => void;
}

export function PageNavigation({ page, numPages, updatePage }: PageNavProps) {
  return (
    <div className="nav-container">
      <a
        className={`nav-button ${page <= 0 ? "disabled" : ""}`}
        onClick={e => {
          e.preventDefault();
          updatePage(-1);
        }}
        href="#"
      >
        <FontAwesomeIcon icon={faCircleLeft} />
        {/* <p className="preview">Prev</p> */}
      </a>
      <div className="spacer">
        <span>
          {page + 1} / {numPages}
        </span>
      </div>
      <a
        className={`nav-button ${page >= numPages - 1 ? "disabled" : ""}`}
        onClick={e => {
          e.preventDefault();
          updatePage(+1);
        }}
        href="#"
      >
        {/* <p className="preview">Next</p> */}
        <FontAwesomeIcon icon={faCircleRight} />
      </a>
    </div>
  );
}
