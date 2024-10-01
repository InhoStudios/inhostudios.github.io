import "./styles.scss";
import React, { useState } from "react";

export function CopyComponent({ value }: { value: string }) {
  const [tooltip, setTooltip] = useState<string>("Copy to clipboard");

  const copyText = async () => {
    await navigator.clipboard.writeText(value);
    setTooltip("Copied: " + value);
  };

  const navigateOut = () => {
    setTooltip("Copy to clipboard");
  };

  return (
    <div className="copy-tooltip">
      <input
        type="text"
        className="mx-2 form-control-sm copy-tooltip-button"
        value={value}
        onClick={copyText}
        onMouseLeave={navigateOut}
        readOnly
      />
      <span className="tooltip-text">{tooltip}</span>
    </div>
  );
}
