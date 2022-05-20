import React, { Dispatch, SetStateAction } from 'react';
import rangeSliderStyles from './RangeSlider.module.css';

export interface IRangeSlider {
  leftValue: string;
  rightValue: string;
  min: number;
  max: number;
  step: number;
  onChange: Dispatch<SetStateAction<number>>;
  value: number;
}

export const RangeSlider: React.FC<IRangeSlider> = ({
  leftValue,
  rightValue,
  value,
  min,
  max,
  step,
  onChange,
}) => {
  return (
    <div className={rangeSliderStyles.container}>
      <span className={rangeSliderStyles.rightValue}>{leftValue}</span>
      <input
        type="range"
        className={rangeSliderStyles.slider}
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span className={rangeSliderStyles.rightValue}>{rightValue}</span>
    </div>
  );
};
