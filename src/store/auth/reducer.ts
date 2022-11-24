import {createReducer} from '@reduxjs/toolkit';
import {logInSuccess, registerSuccess, setOnBoarding} from './actions';
import {AuthDataState} from './types';

const INITIAL_STATE: AuthDataState = {
  onBoarded: false,
  signedIn: false,
};

export const authReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(setOnBoarding, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        return {...state, ...payload};
      }
    }).addCase(registerSuccess, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        console.log("success payload",  payload)
        return {...state , user: payload.user , signedIn: true };
      }
    }).addCase(logInSuccess, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        return {...state , user: payload.user , signedIn: true };
      }
    });
});
