import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'Model/saga';
import reducer from 'Model/reducer';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

export const createReduxStore = () => {
  const store = createStore(reducer, undefined, enhancer);
  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('Model/reducer', () => {
      const nextRootReducer = require('Model/reducer').default;
      store.replaceReducer(nextRootReducer);
    });

    module.hot.accept('Model/saga', () => {
      const nextSaga = require('Model/saga').default;
      sagaMiddleware.run(nextSaga);
    });
  }

  return store;
};
