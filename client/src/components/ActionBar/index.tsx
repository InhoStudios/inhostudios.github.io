import React, { ReactNode } from "react";
import "./styles.scss";

interface ActionBarProps {
  children: ReactNode;
  visible: boolean;
}

export function ActionBar({ children, visible }: ActionBarProps) {
  return (
    <div className={`action-bar ${visible ? "show" : "hide"}`}>{children}</div>
  );
}
