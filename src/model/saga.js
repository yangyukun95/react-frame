import { spawn } from 'redux-saga/effects';
import { sagaTasks as homeSaga } from './home/home.saga';

function* rootSaga() {
  yield [
    spawn(homeSaga),
  ];
}

export default rootSaga;
