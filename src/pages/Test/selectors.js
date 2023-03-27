import {createSelector} from 'reselect';

export const testSelector = (state) => state.test || null;

export const testDataSelector = createSelector(
  testSelector,
  (test) => test?.test?.data?.data || null,
);
export const errorSelector = createSelector(testSelector, (test) => test?.test?.error || null);

export const testExampleSelector = createSelector(
  testSelector,
  (test) => test?.test?.data?.example || null,
);

export const testLoadingSelector = createSelector(testSelector, (test) =>
  test?.test?.loading === undefined ? true : test?.test?.loading,
);
