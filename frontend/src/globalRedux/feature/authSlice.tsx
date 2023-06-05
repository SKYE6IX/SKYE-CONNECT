'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/user';
import type { RootState } from '../store';
import { usersApi } from '../service/userApi';

const initialState = {
  authUser: null,
} as { authUser: User | null };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogout: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(usersApi.endpoints.getUser.matchPending, (state, action) => {
        console.log('pending', action);
      })
      .addMatcher(
        usersApi.endpoints.getUser.matchFulfilled,
        (state, action) => {
          if (action.payload.status === false) {
            return state;
          } else {
            state.authUser = action.payload;
          }
        }
      );
  },
});

export const { onLogout } = authSlice.actions;
export const selectAuthUser = (state: RootState) => state.authReducer.authUser;
export default authSlice.reducer;
