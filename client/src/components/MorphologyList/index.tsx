import React, { useEffect, useState } from "react";
import "./styles.scss";
import {
  colourOptions,
  distAndConfOptions,
  lesionTypeOptions,
  MorphologyProps,
  shapeOptions,
} from "./types";
import { CheckboxList } from "../CheckboxList";
import { CheckboxOption } from "../CheckboxList/types";

export function MorphologyList({
  enabled,
  lesionType,
  setLesionType,
  distAndConfig,
  setDistAndConfig,
  shape,
  setShape,
  colour,
  setColour,
  wide,
  onlyChecked,
}: MorphologyProps) {
  const [ltOptions, setLTOptions] = useState(lesionTypeOptions);
  const [dacOptions, setDACOptions] = useState(distAndConfOptions);
  const [shpOptions, setSHPOptions] = useState(shapeOptions);
  const [clrOptions, setCLROptions] = useState(colourOptions);
  const [colWidth, setColWidth] = useState("col-lg-6");

  useEffect(() => {
    if (!!wide) setColWidth("col-lg-3");

    if (onlyChecked) setColWidth("col-lg-auto");

    const newLT: CheckboxOption[] = ltOptions.map(opt => {
      return {
        value: opt.value,
        title: opt.title,
        checked: ((opt.value as number) & lesionType) == opt.value,
        tooltip: opt.tooltip,
      };
    });

    const newDAC = dacOptions.map(opt => {
      return {
        value: opt.value,
        title: opt.title,
        checked: ((opt.value as number) & distAndConfig) == opt.value,
        tooltip: opt.tooltip,
      };
    });

    const newSHP = shpOptions.map(opt => {
      return {
        value: opt.value,
        title: opt.title,
        checked: ((opt.value as number) & shape) == opt.value,
        tooltip: opt.tooltip,
      };
    });

    const newCLR = clrOptions.map(opt => {
      return {
        value: opt.value,
        title: opt.title,
        checked: ((opt.value as number) & colour) == opt.value,
        tooltip: opt.tooltip,
      };
    });

    setLTOptions(newLT);
    setDACOptions(newDAC);
    setSHPOptions(newSHP);
    setCLROptions(newCLR);
  }, [lesionType, distAndConfig, shape, colour]);

  const updateBitMask = (original: number, mask: number, remove?: boolean) => {
    const newVal: number = remove ? original & ~mask : original | mask;
    return newVal;
  };

  return (
    <div className="row morphology-list">
      <div className={`${colWidth} mb-3`}>
        <label>Lesion Type</label>
        <CheckboxList
          options={ltOptions}
          enabled={enabled}
          id="lesion-types"
          onSelect={e => {
            const newMask = updateBitMask(
              lesionType,
              parseInt(e.target.value),
              !e.target.checked
            );
            enabled && setLesionType && setLesionType(newMask);
          }}
          onlyChecked={!!onlyChecked}
        />
      </div>

      <div className={`${colWidth} mb-3`}>
        <label>Shape</label>
        <CheckboxList
          options={shpOptions}
          enabled={enabled}
          id="lesion-shape"
          onSelect={e => {
            const newMask = updateBitMask(
              shape,
              parseInt(e.target.value),
              !e.target.checked
            );
            enabled && setShape && setShape(newMask);
          }}
          onlyChecked={!!onlyChecked}
        />
      </div>

      <div className={`${colWidth} mb-3`}>
        <label>Distribution and Configuration</label>
        <CheckboxList
          options={dacOptions}
          enabled={enabled}
          id="distribution-and-configuration"
          onSelect={e => {
            const newMask = updateBitMask(
              distAndConfig,
              parseInt(e.target.value),
              !e.target.checked
            );
            enabled && setDistAndConfig && setDistAndConfig(newMask);
          }}
          onlyChecked={!!onlyChecked}
        />
      </div>

      <div className={`${colWidth} mb-3`}>
        <label>Colour</label>
        <CheckboxList
          options={clrOptions}
          enabled={enabled}
          id="lesion-colour"
          onSelect={e => {
            const newMask = updateBitMask(
              colour,
              parseInt(e.target.value),
              !e.target.checked
            );
            enabled && setColour && setColour(newMask);
          }}
          onlyChecked={!!onlyChecked}
        />
      </div>
    </div>
  );
}
