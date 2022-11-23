import {createAction} from '@reduxjs/toolkit';

export const setOnBoarding = createAction<{onBoarded: boolean}>(
  '@AUTH/SET_ON_BOARDING_STATE',
);
