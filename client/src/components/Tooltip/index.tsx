import React, { useRef, useState } from "react";
import "./styles.scss";

interface CursorTooltipProps {
  content?: string;
  children: React.ReactNode;
}

export function CursorTooltip({ content, children }: CursorTooltipProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    const tooltipWidth = ref.current?.offsetWidth || 0;
    const tooltipHeight = ref.current?.offsetHeight || 0;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const offsetSize = 12;

    let tooltipX = clientX + offsetSize;
    let tooltipY = clientY + offsetSize;

    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = clientX - tooltipWidth - offsetSize;
    }

    if (tooltipY + tooltipHeight > viewportHeight) {
      tooltipY = viewportHeight - tooltipHeight - offsetSize;
    }

    setPosition({ x: tooltipX, y: tooltipY });
  };

  return (
    <div className="cursor-tooltip" onMouseMove={handleMouseMove}>
      {children}
      {!!content ? (
        <span
          className="tooltiptext"
          style={{
            top: position.y,
            left: position.x,
          }}
          ref={ref}
        >
          {content}
        </span>
      ) : undefined}
    </div>
  );
}
