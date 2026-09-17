const currencySymbols = {
  USD: '$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
  INR: '₹',
  LKR: 'Rs ',
  CAD: '$',
  AUD: '$',
  CHF: 'Fr',
  CNY: '¥',
  KRW: '₩',
  SGD: '$',
  HKD: '$',
  NZD: '$',
  SEK: 'kr',
  NOK: 'kr',
  DKK: 'kr',
  PLN: 'zł',
  RUB: '₽',
  BRL: 'R$',
  MXN: '$',
  ZAR: 'R',
};

export const getCurrencySymbol = (currency = 'USD') => {
  return currencySymbols[currency] || currency;
};

export const formatCurrency = (amount, currency = 'USD') => {
  const symbol = getCurrencySymbol(currency);
  return `${symbol}${Number(amount).toLocaleString()}`;
};
