import {createAction} from 'redux-actions';
import actionNames from 'utils/actionNames';

export const CHECK_APP_CONFIG = 'CHECK_APP_CONFIG';
export const SET_CONFIG = 'SET_CONFIG';

export const appActions = actionNames([CHECK_APP_CONFIG, SET_CONFIG]);

export const appCheckConfig = createAction(appActions.CHECK_APP_CONFIG);
export const appSetConfig = createAction(appActions.SET_CONFIG);
