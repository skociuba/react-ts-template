import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootSaga from './sagas';
import createRootReducer from './reducers';
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({trace: true});
const store =
  process.env.NODE_ENV === 'production'
    ? createStore(createRootReducer(), applyMiddleware(sagaMiddleware))
    : createStore(createRootReducer(), composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
