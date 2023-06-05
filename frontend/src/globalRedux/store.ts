'use client';
import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { rootApi } from './service/rootApi';
import authReducer from './feature/authSlice';

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
    }).concat(rootApi.middleware),
});

setupListeners(store.dispatch);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
