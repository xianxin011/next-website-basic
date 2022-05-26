import { all, call, fork, takeLatest } from 'redux-saga/effects'
import { examplesTypes } from './action'
import axios, { AxiosResponse } from 'axios';

function* login() {
  try {

  } catch (err) {

  }
}


interface IExamplesAsync {

}

function* examplesAsync() {
  try {
    const { status, data }: AxiosResponse<IExamplesAsync> = yield call(
      axios.get,
      'https://jsonplaceholder.typicode.com/users',
    );

  } catch (err) {

  }
}

function* userSaga() {
  yield all([
    takeLatest(examplesTypes.EXAMPLES_ASYNC, examplesAsync),
  ])
}

let user = [fork(userSaga)];

export default user;

