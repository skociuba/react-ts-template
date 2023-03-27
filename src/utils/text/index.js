export const getOrdinalTextSuffix = (number) => {
  if (number) {
    const lastDigit = +number.toString().split('').pop();
    const suffix = lastDigit === 1 ? 'st' : lastDigit === 2 ? 'nd' : lastDigit === 3 ? 'rd' : 'th';
    return {number, suffix, lastDigit};
  }
  return {number, suffix: null, lastDigit: null};
};
