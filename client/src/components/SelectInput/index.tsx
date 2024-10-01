import "./styles.scss";
import React from "react";
import { SelectInputProps } from "~/components/SelectInput/types";

export function SelectInput({
  id,
  label,
  value,
  size,
  onChange,
  required,
  emptyText,
  options,
}: SelectInputProps) {
  return (
    <div className="form-group">
      {!!label && label !== "" ? (
        <label className="flex-grow-1">{label}</label>
      ) : undefined}
      <select
        className={`form-control form-control-${size ?? "lg"} ${
          value === undefined ? "select-input-empty" : ""
        }`}
        role="button"
        name={id}
        id={id}
        onChange={event => onChange && onChange(event.target.value)}
        value={value}
        required={required}
      >
        <option value="" selected disabled hidden>
          {emptyText}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
