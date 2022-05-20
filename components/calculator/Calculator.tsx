import React, { useEffect, useState } from 'react';
import { NumberInput } from '../forms/input/number/NumberInput';
import { RangeSlider } from '../forms/input/rangeSlider/RangeSlider';
import {
  COPY,
  INVOICE_AMOUNT_MAX,
  INVOICE_AMOUNT_MIN,
  INVOICE_AMOUNT_START,
  INVOICE_AMOUNT_STEP,
  PAYMENT_TERMS_MAX,
  PAYMENT_TERMS_MIN,
  PAYMENT_TERMS_START,
  PAYMENT_TERMS_STEP,
} from './Calculator.constants';
import calculatorStyles from './Calculator.module.css';
import {
  calculateFee,
  paymentTermsFormatter,
  usdFormatter,
} from './Calculator.utils';
import { CalculatorSummary } from './CalculatorSummary';

export interface ICalculator {}

export const Calculator: React.FC = () => {
  const [amount, setAmount] = useState<number>(INVOICE_AMOUNT_START);
  const [paymentTerms, setPaymentTerms] = useState<number>(PAYMENT_TERMS_START);
  const [fee, setFee] = useState<number | null>(null);

  useEffect(() => {
    setFee(calculateFee(amount, paymentTerms));
  }, [amount, paymentTerms]);

  return (
    <section className={calculatorStyles.container}>
      <div className={calculatorStyles.form}>
        <div className={calculatorStyles.row}>
          <NumberInput
            title={COPY.TITLE_INVOICE_AMOUNT}
            min={INVOICE_AMOUNT_MIN}
            max={INVOICE_AMOUNT_MAX}
            onChange={setAmount}
            value={amount}
          />
          <RangeSlider
            leftValue={usdFormatter(INVOICE_AMOUNT_MIN)}
            rightValue={usdFormatter(INVOICE_AMOUNT_MAX)}
            step={INVOICE_AMOUNT_STEP}
            min={INVOICE_AMOUNT_MIN}
            max={INVOICE_AMOUNT_MAX}
            onChange={setAmount}
            value={amount}
          />
        </div>
        <div className={calculatorStyles.row}>
          <NumberInput
            title={COPY.TITLE_PAYMENT_TERMS}
            min={PAYMENT_TERMS_MIN}
            max={PAYMENT_TERMS_MAX}
            onChange={setPaymentTerms}
            value={paymentTerms}
          />
          <RangeSlider
            leftValue={paymentTermsFormatter(PAYMENT_TERMS_MIN)}
            rightValue={paymentTermsFormatter(PAYMENT_TERMS_MAX)}
            step={PAYMENT_TERMS_STEP}
            min={PAYMENT_TERMS_MIN}
            max={PAYMENT_TERMS_MAX}
            onChange={setPaymentTerms}
            value={paymentTerms}
          />
        </div>
      </div>
      <CalculatorSummary invoiceAmount={amount} fee={fee} />
      <button className={calculatorStyles.button}>{COPY.BUTTON}</button>
    </section>
  );
};
