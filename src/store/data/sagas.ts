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

const {error} = strings;

export function* fetchData() {
  try {
    const response: AxiosResponse<unknown> = yield call(() =>
      client.get(`/chows?populate=*`),
    );
    const data = response.data;


    console.log("fetch all response ", {data})
    // yield put(fetachAllSuccess({posts: data.children, after: data.after}));
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
            // store.dispatch(fetachAllRequest({sort}));
          },
        },
        variant: 'success',
        visible: true,
      }),
    );
    //if for some weird reason, the delay crashes ;]
  }
}



export function* watchDataSagas() {
  //Could use yield all and have one saga listen for both actions
  yield takeLatest(fetachAllRequest.type, fetchData);
}
