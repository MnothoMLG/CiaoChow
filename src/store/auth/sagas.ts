import {AxiosResponse} from 'axios';
import {takeLatest, put, call} from 'redux-saga/effects';
import {client} from '../../api/api';
import { setToken } from '../../api/tokenData';
import { registerError, registerRequest, registerSuccess } from './actions';
import { AuthenticateUserResponse, UserDataInterface } from './types';


export function* registerUser({ payload }: { payload: UserDataInterface; type: string }) {

    console.log("register user payload" , payload)
    try {
      const response: AxiosResponse<AuthenticateUserResponse>= yield call(() => client.post("/auth/local/register", payload));

        if (response.data) { 
            console.log(" the data from the response ", response.data)

            yield setToken(response.data.jwt)
            yield put (registerSuccess(response.data))
        }

    } catch (err) {

        console.log("an error occured  ====>", err , err.response)
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
