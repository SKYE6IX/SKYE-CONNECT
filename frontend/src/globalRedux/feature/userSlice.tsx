'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types/user';
import type { RootState } from '../store';

interface InitialState {
  user_data: User | null;
  login_feedback: {
    message: string;
    open_alert: boolean;
    status: boolean;
  };
}

const initialState: InitialState = {
  user_data: null,
  login_feedback: {
    message: '',
    open_alert: false,
    status: false,
  },
};

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    onLogout: () => initialState,
    setLoginFeedback: (
      state,
      action: PayloadAction<Omit<InitialState, 'user_data'>>
    ) => {
      state.login_feedback = action.payload.login_feedback;
    },
  },
});

export const { onLogout, setLoginFeedback } = userSlice.actions;
export const selectUserData = (state: RootState) => state.userReducer.user_data;
export const selectLoginFeedback = (state: RootState) =>
  state.userReducer.login_feedback;
export default userSlice.reducer;
