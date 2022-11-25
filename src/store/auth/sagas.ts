import {AxiosResponse} from 'axios';
import {takeLatest, put, call, delay} from 'redux-saga/effects';
import {client} from '../../api/api';
import { setToken } from '../../api/tokenData';
import { setAndShowFeedback } from '../alert/actions';
import { AlertState } from '../alert/types';
import { logInError, logInRequest, logInSuccess, registerError, registerRequest, registerSuccess } from './actions';
import { AuthenticateUserResponse, LoginDataInterface, UserDataInterface } from './types';

export function* registerUser({ payload }: { payload: UserDataInterface; type: string }) {

    try {
      const response: AxiosResponse<AuthenticateUserResponse>= yield call(() => client.post("/api/auth/local/register", payload));
      yield delay(2000) //just to display the loader
      if (response.data) { 

          yield setToken(response.data.jwt)
          yield put (registerSuccess(response.data))
      }

    } catch (err) {
      yield put (setAndShowFeedback({
        ...genericErrorPayload,
        visible: true,
        message: "An error occured while registering your account.\n Please try again.",
      }))
      yield put(
        registerError({
          message: err.message,
          statusCode: err?.response.status,
        }),
      );
    }
}

export function* loginUser({ payload }: { payload: LoginDataInterface; type: string }) {

  try {
    const response: AxiosResponse<AuthenticateUserResponse>= yield call(() => client.post("/api/auth/local", payload));
    yield delay(2000) //just to display the loader
    if (response.data) { 
        console.log(" the data from the response ", response.data)

        yield setToken(response.data.jwt)
        yield put (logInSuccess(response.data))
    }

  } catch (err) {

    yield put (setAndShowFeedback({
      ...genericErrorPayload,
      visible: true,
      message: "An error occured while registering your account.\n Please try again.",
    }));
  
    yield put(
      logInError({
        message: err.message,
        statusCode: err?.response.status,
      }),
    );
  }
}

export function* watchAuthSagas() {
    yield takeLatest(registerRequest.type, registerUser);
    yield takeLatest(logInRequest.type, loginUser);
}

const genericErrorPayload : Partial<AlertState> = {
  title: "Oops",
  visible: true,
  right: {
    label: "Ok",
    onPress: () => null
  }
}