import {put, all, select, takeLatest} from 'redux-saga/effects';
import {getDynamicConfig, getOverridableConfig} from 'config/appConfig';

import {ENVS} from '../../config/constants';

import {appActions, appSetConfig} from './actions';

export function* checkConfigSaga() {
  try {
    const config = yield select(({application}) => application.config);
    if (!config) {
      const dynamicConfig = getDynamicConfig();

      const staticCalculatedConfig = {
        ...getOverridableConfig(),
      };

      const allConfigs = {...dynamicConfig, ...staticCalculatedConfig};

      yield put(appSetConfig(allConfigs));
    }
  } catch (e) {
    if (process.env.NODE_ENV !== ENVS.PRODUCTION) {
      console.error('cannot updated data');
    }
  }
}

export default function* () {
  yield all([takeLatest(appActions.CHECK_APP_CONFIG, checkConfigSaga)]);
}
