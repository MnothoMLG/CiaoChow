import {createAction} from '@reduxjs/toolkit';
import { IEntry, Chow } from './types';

export const FETCH_ALL_LOADING_KEY = '@CHOW/FETCH_ALL';
export const fetachAllRequest = createAction(
  '@CHOW/FETCH_ALL_API_REQUEST',
);
export const fetachAllSuccess = createAction<{chow: IEntry<Chow>[]}>(
  '@CHOW/FETCH_ALL_API_SUCCESS',
);
export const fetachAllError = createAction('@CHOW/FETCH_ALL_API_ERROR');
