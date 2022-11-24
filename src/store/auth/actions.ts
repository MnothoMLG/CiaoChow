import {createAction} from '@reduxjs/toolkit';
import { AuthenticateUserResponse, LoginDataInterface, UserDataInterface } from './types';

export const setOnBoarding = createAction<{onBoarded: boolean}>(
  '@AUTH/SET_ON_BOARDING_STATE',
);

export const LOG_IN_LOADING_KEY = "@AUTH/LOG_IN";
export const logInRequest = createAction<LoginDataInterface>("@AUTH/LOG_IN_REQUEST");
export const logInSuccess = createAction<AuthenticateUserResponse>("@AUTH/LOG_IN_API_SUCCESS");
export const logInError = createAction<{}>("@AUTH/LOG_IN_API_ERROR");


export const REGISTER_LOADING_KEY = "@AUTH/REGISTER";
export const registerRequest = createAction<UserDataInterface>("@AUTH/REGISTER_REQUEST");
export const registerSuccess = createAction<AuthenticateUserResponse>("@AUTH/REGISTER_API_SUCCESS");
export const registerError = createAction<{}>("@AUTH/REGISTER_API_ERROR");