/* eslint-disable no-unused-expressions */
import reducers from './reducers';
import {FETCH_TEST, FETCH_TEST_SUCCESS, FETCH_TEST_FAIL} from './actions';

describe('Test reducers', () => {
  describe('Test reducers', () => {
    it('returns loading state ', () => {
      expect(reducers([], {type: FETCH_TEST})).toEqual({
        test: {
          data: null,
          loading: true,
          error: null,
        },
      });
    }),
      it('returns success state ', () => {
        const payload = {data: {}};

        expect(reducers([], {type: FETCH_TEST_SUCCESS, payload})).toEqual({
          test: {
            data: {},
            loading: false,
            error: null,
          },
        });
      }),
      it('returns error state ', () => {
        const payload = {message: 'Error'};

        expect(reducers([], {type: FETCH_TEST_FAIL, payload})).toEqual({
          test: {
            data: null,
            loading: false,
            error: 'Error',
          },
        });
      });
  });
});
