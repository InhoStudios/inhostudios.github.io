import React from "react";

export function LicenseIcons() {
  return (
    <span className="tool-icons">
      <span className="cc-icon">
        <svg viewBox="0 0 30 30">
          <use href={`${process.env.PUBLIC_URL}/cc-icons.svg#cc-logo`}></use>
        </svg>
      </span>
      <span className="cc-icon">
        <svg viewBox="0 0 30 30">
          <use href={`${process.env.PUBLIC_URL}/cc-icons.svg#cc-by`}></use>
        </svg>
      </span>
      <span className="cc-icon">
        <svg viewBox="0 0 30 30">
          <use href={`${process.env.PUBLIC_URL}/cc-icons.svg#cc-nc`}></use>
        </svg>
      </span>
      <span className="cc-icon">
        <svg viewBox="0 0 30 30">
          <use href={`${process.env.PUBLIC_URL}/cc-icons.svg#cc-nd`}></use>
        </svg>
      </span>
    </span>
  );
}
