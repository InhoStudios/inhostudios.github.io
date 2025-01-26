import React from "react";
import "./styles.scss";

export function OverlayLeaf() {
  return (
    <div className="overlay-leaf">
      <img src={`${process.env.PUBLIC_URL}/leaf.PNG`} alt="leaf" />
    </div>
  );
}
