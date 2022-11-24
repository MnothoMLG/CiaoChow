import {createReducer} from '@reduxjs/toolkit';
import {fetachAllSuccess } from './actions';
import { IEntry, Chow } from './types';

const INITIAL_STATE : { chow : IEntry<Chow>[]} = {
  chow: []
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
