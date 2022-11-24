import {all} from 'redux-saga/effects';
import { watchAuthSagas } from './auth/sagas';
import { watchDataSagas } from './data/sagas';

export default function* sagas() {
  yield all([watchAuthSagas(), watchDataSagas()]);
}
