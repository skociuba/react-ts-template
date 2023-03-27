import {isNil} from 'lodash';

export const reduceGlobalState = (action, reducers) => {
  return (state) => {
    const _reducer = reducers[action.type];
    if (!_reducer) {
      return state;
    }
    const _state = {...state};
    const reducerResult = _reducer(_state, action);
    if (!isNil(reducerResult)) {
      return reducerResult;
    }
    return _state;
  };
};

export const isUpdatedAction = (update) => {
  return !isNil(update.type);
};
