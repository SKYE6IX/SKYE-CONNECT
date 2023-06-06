'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/user';
import type { RootState } from '../store';

const initialState = {
  userData: null,
} as { userData: User | null };

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    onLogout: () => initialState,
  },
});

export const { onLogout } = userSlice.actions;
export const selectUserData = (state: RootState) => state.userReducer.userData;
export default userSlice.reducer;
