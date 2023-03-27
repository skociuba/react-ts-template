import {getOrdinalTextSuffix} from '.';

describe('getOrdinalTextSuffix()', () => {
  it('encode data', () => {
    expect(getOrdinalTextSuffix(null)).toEqual({number: null, lastDigit: null, suffix: null});
    expect(getOrdinalTextSuffix(11)).toEqual({number: 11, lastDigit: 1, suffix: 'st'});
    expect(getOrdinalTextSuffix(12)).toEqual({number: 12, lastDigit: 2, suffix: 'nd'});
    expect(getOrdinalTextSuffix(13)).toEqual({number: 13, lastDigit: 3, suffix: 'rd'});
    expect(getOrdinalTextSuffix(14)).toEqual({number: 14, lastDigit: 4, suffix: 'th'});
  });
});
