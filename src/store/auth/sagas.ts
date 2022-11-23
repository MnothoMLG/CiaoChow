import {AxiosResponse} from 'axios';
import {takeLatest, put, call} from 'redux-saga/effects';
import {client} from '../../api/api';
import { registerError, registerRequest } from './actions';
import { UserDataInterface } from './types';


export function* registerUser({ payload }: { payload: UserDataInterface; type: string }) {

    console.log("register user payload")
    try {
      const response: AxiosResponse<unknown>= yield call(() => client.post("/auth/local/register", payload));

      console.log("register user response ", {response})
    } catch (err) {

        console.log("an error occured  ====>", {err})
      yield put(
        registerError({
          message: err.message,
          statusCode: err?.response.status,
        }),
      );
    }
  }


export function* watchAuthSagas() {
    yield takeLatest(registerRequest.type, registerUser);
}
