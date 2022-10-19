import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import user from './userSlice';

const combinedReducers = combineReducers({
    user,
});

export const makeStore = () =>
    configureStore({
        reducer: combinedReducers
    });

export const wrapper = createWrapper(makeStore);