import {applicationSelector, paramsSelector} from './selectors';

const state = {
  application: {
    config: null,
    loading: [],
  },
};

describe('application - selectors', () => {
  it('return application', () => {
    expect(applicationSelector(state)).toEqual(state.application);
    expect(applicationSelector(undefined)).toEqual(null);
  });
  it('return params', () => {
    const testedState = {
      ...state.application,
      config: {params: {}},
    };
    expect(paramsSelector(testedState)).toEqual(state.application.config);
    expect(paramsSelector(undefined)).toEqual(null);
  });
});
