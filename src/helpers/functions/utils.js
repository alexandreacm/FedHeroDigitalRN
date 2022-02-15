export const handlePixels = value => {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
};

export const convertToNumber = textNumber =>
  textNumber ? parseFloat(textNumber.replace(',', '.')) : 0;

export const numberFormat = value =>
  new Intl.NumberFormat('en-US', {
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(value);
