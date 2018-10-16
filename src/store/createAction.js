import { takeLatest, takeEvery } from 'redux-saga/effects';

const createReducer = (initState, handlers) =>
  (state = initState, action) => {
    const handler = handlers[action.type];
    return handler ? { ...state, ...handler(state, action) } : state;
  };

export const createSagaAction = ({
  nameSpace = '',
  action = {},
  sagaTaskLatest = {},
  sagaTaskEvery = {},
}) => {
  const newAction = {};
  const sagaTaskLatestArr = Object.entries(sagaTaskLatest);
  const sagaTaskEveryArr = Object.entries(sagaTaskEvery);

  const taskLatest = sagaTaskLatestArr.map(([sagaName, saga]) => {
    const actionSaga = `${nameSpace}/${sagaName}`;
    newAction[sagaName] = actionSaga;
    return takeLatest(actionSaga, saga);
  });

  const taskEvery = sagaTaskEveryArr.map(([sagaName, saga]) => {
    const actionSaga = `${nameSpace}/${sagaName}`;
    newAction[sagaName] = actionSaga;
    return takeEvery(actionSaga, saga);
  });

  return {
    * sagaTasks() { yield [...taskLatest, ...taskEvery]; },
    actionType: { ...newAction, ...action },
  };
};


export const createReducerAction = ({
  nameSpace = '',
  initState,
  reducer = {},
}) => {
  const action = {};
  const reducerArr = Object.entries(reducer);
  const newReducer = {};
  reducerArr.forEach(([reducerName, reducerFn]) => {
    const newAction = `${nameSpace}/${reducerName}`;
    action[reducerName] = newAction;
    newReducer[newAction] = reducerFn;
  });

  return {
    nameSpace,
    action,
    reducer: createReducer(initState, newReducer),
  };
};
