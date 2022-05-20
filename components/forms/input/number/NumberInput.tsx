import React, { Dispatch, SetStateAction } from 'react';
import inputStyles from './NumberInput.module.css';

export interface INumberInput {
  id?: string;
  title: string;
  min: number;
  max: number;
  onChange: Dispatch<SetStateAction<number>>;
  value: number;
}

export const NumberInput: React.FC<INumberInput> = ({
  title,
  id,
  min,
  max,
  onChange,
  value,
}) => {
  return (
    <div className={inputStyles.container}>
      <label htmlFor={id} className={inputStyles.label}>
        {title}
      </label>
      <input
        id={id}
        data-testid={id}
        className={inputStyles.input}
        type="number"
        min={min}
        max={max}
        onChange={(e) => onChange(Number(e.target.value))}
        value={value}
      />
    </div>
  );
};
