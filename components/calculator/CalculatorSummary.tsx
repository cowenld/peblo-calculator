import React from 'react';
import { COPY } from './Calculator.constants';
import { usdFormatter } from './Calculator.utils';
import calculatorSummaryStyles from './CalculatorSummary.module.css';

export interface ICalculatorSummary {
  invoiceAmount: number;
  fee: number | null;
}

export const CalculatorSummary: React.FC<ICalculatorSummary> = ({
  invoiceAmount,
  fee,
}) => {
  return (
    <div className={calculatorSummaryStyles.summary}>
      <h2 className={calculatorSummaryStyles.title}>{COPY.TITLE_PAID_TODAY}</h2>
      <hr className={calculatorSummaryStyles.hr} />
      {!fee && <div className={calculatorSummaryStyles.loading}>Loading</div>}
      {fee && (
        <>
          <div className={calculatorSummaryStyles.info}>
            <span>{COPY.AMOUNT}</span>{' '}
            <span>{usdFormatter(invoiceAmount - fee)}</span>
          </div>
          <div className={calculatorSummaryStyles.info}>
            <span>{COPY.FEE}</span> <span>{usdFormatter(fee)}</span>
          </div>
        </>
      )}
    </div>
  );
};
