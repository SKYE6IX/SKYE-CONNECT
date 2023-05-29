import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/user';
import type { RootState } from '../store';
import { usersApi } from '../userApi';

const initialState = {
  user: null,
} as { user: null | User };

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
            state.user = action.payload;
          }
        }
      );
  },
});

export const { onLogout } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
