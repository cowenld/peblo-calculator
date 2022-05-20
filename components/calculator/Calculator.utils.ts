export const usdFormatter = (value: number) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value);

export const paymentTermsFormatter = (days: number) => `${days} days`;

export const calculateFee = (amount: number, paymentTerms: number) => {
  switch (paymentTerms) {
    case 30:
      return (amount / 100) * 5;
    case 60:
      return (amount / 100) * 10;
    case 90:
      return (amount / 100) * 12.5;
    default:
      return (amount / 100) * 5;
  }
};
