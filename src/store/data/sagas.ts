import {AxiosResponse} from 'axios';
import {takeLatest, put, call} from 'redux-saga/effects';
import {client} from '../../api/api';
import strings from '../../constants/strings';
import {setAndShowFeedback} from '../alert/actions';
import { store } from '../root.store';
import {
  fetachAllError,
  fetachAllRequest,
  fetachAllSuccess,
} from './actions';
import { Chow, IEntry } from './types';

const {error} = strings;

export function* fetchData() {
  try {
    const response: AxiosResponse<{data : IEntry<Chow>[]}> = yield call(() =>
      client.get(`/api/chows?populate=*`),
    );
    const {data} = response;  
    yield put(fetachAllSuccess({chow: data.data}));
  } catch (err) {
    yield put(fetachAllError());
    yield put(
      setAndShowFeedback({
        title: error.title,
        message: error.message,
        left: {
          ...error.left,
          onPress: () => {},
        },
        right: {
          ...error.right,
          onPress: () => {
            store.dispatch(fetachAllRequest());
          },
        },
        visible: true,
      }),
    );
  }
}

export function* watchDataSagas() {
  //Could use yield all and have one saga listen for both actions
  yield takeLatest(fetachAllRequest.type, fetchData);
}
