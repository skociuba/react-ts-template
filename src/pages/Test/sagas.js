import {call, put, all, select, takeLatest} from 'redux-saga/effects';

import {testAction, fetchTestSuccess, fetchTestFail} from './actions';
import {getTestData} from './transport';
import {getMappedTestResponse} from './responseMappers';
export function* getTestSaga() {
  try {
    const config = yield select(({application}) => application.config);
    const response = yield call(getTestData, {config});
    if (!response) {
      throw console.log('not found');
    }
    yield put(fetchTestSuccess({data: getMappedTestResponse(response) || null}));
  } catch (e) {
    yield put(fetchTestFail(e));
  }
}

export default function* () {
  yield all([takeLatest(testAction.FETCH_TEST, getTestSaga)]);
}
