import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './data/reducer';
import {loadingReducer} from './loading/reducer';
import {alertReducer} from './alert/reducer';
import { authReducer } from './auth/reducer';

export const reducers = combineReducers({
  data: dataReducer,
  authReducer,
  loadingReducer,
  alertReducer,
});

export type AppState = ReturnType<typeof reducers>;
