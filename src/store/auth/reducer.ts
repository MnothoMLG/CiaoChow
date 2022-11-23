import {createReducer} from '@reduxjs/toolkit';
import {setOnBoarding} from './actions';
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
    });
});
