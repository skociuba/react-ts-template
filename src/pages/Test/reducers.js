import {handleActions} from 'redux-actions';

import {fetchTestData, fetchTestSuccess, fetchTestFail} from './actions';

export const initialState = {
  test: {
    data: null,
    loading: false,
    error: null,
  },
};
export default handleActions(
  {
    [fetchTestData](state) {
      return {
        ...state,
        test: {
          ...state.test,
          data: null,
          loading: true,
          error: null,
        },
      };
    },
    [fetchTestSuccess](state, {payload}) {
      return {
        ...state,
        test: {
          ...state.test,
          data: payload.data,
          loading: false,
          error: null,
        },
      };
    },
    [fetchTestFail](state, {payload}) {
      return {
        ...state,
        test: {
          ...state.test,
          data: null,
          loading: false,
          error: payload.message,
        },
      };
    },
  },
  initialState,
);
