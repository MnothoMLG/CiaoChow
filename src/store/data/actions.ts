import {createAction} from '@reduxjs/toolkit';

export const FETCH_ALL_LOADING_KEY = '@CHOW/FETCH_ALL';
export const fetachAllRequest = createAction<{data?:  any}>(
  '@CHOW/FETCH_ALL_API_REQUEST',
);
export const fetachAllSuccess = createAction<{data: any}>(
  '@CHOW/FETCH_ALL_API_SUCCESS',
);
export const fetachAllError = createAction('@CHOW/FETCH_ALL_API_ERROR');
