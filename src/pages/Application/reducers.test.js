import reducers from './reducers';
import {SET_CONFIG} from './actions';

describe('Application reducers', () => {
  describe('config reducers', () => {
    it('returns config state ', () => {
      expect(reducers([], {type: SET_CONFIG})).toEqual({
        config: {},
      });
    });
  });
});
