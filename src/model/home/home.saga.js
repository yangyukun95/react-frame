import { call, put } from 'redux-saga/effects';
import { createSagaAction } from 'Store';
import * as Api from 'Api/home.api';
import { action, nameSpace } from './home.reducer';

export const { actionType, sagaTasks } = createSagaAction({
  nameSpace,
  action,
  sagaTaskLatest: {
    * getDemo({ payload }) {
      yield put({ type: action.setLoading, payload: true });
      const { data, status } = yield call(Api.getDemo, payload);
      if (status === 200) {
        yield put({ type: action.setDemoData, payload: data });
      }
      yield put({ type: action.setLoading, payload: false });
    },
  },

  sagaTaskEvery: {},
});

