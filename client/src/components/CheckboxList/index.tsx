import React from "react";
import { CheckboxListProps } from "./types";
import "./styles.scss";
import { CursorTooltip } from "../Tooltip";

export function CheckboxList({
  id,
  single,
  enabled,
  onSelect,
  options,
  onlyChecked,
}: CheckboxListProps) {
  return (
    <div className="checkbox-list" id={id}>
      {options.map(option =>
        !onlyChecked || option.checked ? (
          <CursorTooltip key={option.value} content={option.tooltip}>
            <label>
              <input
                type={single ? "radio" : "checkbox"}
                value={option.value}
                onChange={e => {
                  onSelect && onSelect(e);
                }}
                checked={option.checked}
                onClick={e => {
                  !enabled && e.preventDefault();
                }}
                disabled={!option.checked && !enabled}
              />
              {option.checked ? (
                <span className="px-2">
                  <strong>{option.title}</strong>
                </span>
              ) : (
                <span className="px-2">{option.title}</span>
              )}
            </label>
            <br></br>
          </CursorTooltip>
        ) : undefined
      )}
    </div>
  );
}
