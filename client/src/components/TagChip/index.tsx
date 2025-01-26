import React from "react";
import { TagChipProps } from "./types";
import "./styles.scss";

export function TagChip({ index, value, deletable, onDelete }: TagChipProps) {
  return (
    <span className="tag">
      {value}
      {deletable ? (
        <span
          onClick={e => {
            e.preventDefault();
            onDelete && onDelete(index);
          }}
        >
          &times;
        </span>
      ) : undefined}
    </span>
  );
}
