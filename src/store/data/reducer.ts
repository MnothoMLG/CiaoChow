import {createReducer} from '@reduxjs/toolkit';
import {fetachAllSuccess } from './actions';

const INITIAL_STATE = {
  sort: 'Hot',
  after: '',
  posts: [],
};

export const dataReducer = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(fetachAllSuccess, (state, action) => {
      if (action.payload) {
        const {payload} = action;
        return {...state, ...payload};
      }
    })
});
