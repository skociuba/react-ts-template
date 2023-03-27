import {handleActions} from 'redux-actions';
//import { v4 as uuid } from "uuid"
//import { parsePayload } from "./utils/parsePayload"

import {appSetConfig} from './actions';
export const initialState = {
  config: null,
  loading: [],
};
export default handleActions(
  {
    [appSetConfig](state, {payload}) {
      return {
        ...state,
        config: {
          ...state.config,
          ...payload,
        },
      };
    },
  },
  initialState,
);
