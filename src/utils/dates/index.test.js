import {getFormattedDate, getSubtractedDays} from '.';

describe('getFormattedDater()', () => {
  it('render right data', () => {
    expect(getFormattedDate('2021-05-01t14:33:38.897Z')).toEqual(`01 May 2021`);
    expect(getFormattedDate(null)).toEqual(`-`);
  });
});

describe('getSubtractedDays()', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(1990, 3, 13));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('render right data', () => {
    expect(getSubtractedDays('13')).toEqual({
      endDate: '1990-04-13',
      startDate: '1990-03-31',
    });
    expect(getSubtractedDays('test')).toEqual({
      endDate: null,
      startDate: null,
    });
  });
});
