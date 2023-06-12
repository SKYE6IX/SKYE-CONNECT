'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

type CorrespondUser = {
  id: number;
  avatar: string | undefined;
  first_name: string;
  last_name: string;
};

const initialState = {
  chatRoomUrl: '/messenger/',
  correspondUser: {
    avatar: '',
    first_name: '',
    last_name: '',
  },
} as { chatRoomUrl: string; correspondUser: CorrespondUser };

const messengerSlice = createSlice({
  name: 'messengerSlice',
  initialState,
  reducers: {
    setChatRoomUrl: (state, action: PayloadAction<string>) => {
      state.chatRoomUrl = state.chatRoomUrl + action.payload;
    },
    closeChatRoom: () => initialState,
    setCorrespondUser: (state, action: PayloadAction<CorrespondUser>) => {
      state.correspondUser = action.payload;
    },
  },
});

export const { setChatRoomUrl, closeChatRoom, setCorrespondUser } =
  messengerSlice.actions;
export const selectChatRoomUrl = (state: RootState) =>
  state.messengerReducer.chatRoomUrl;
export const selectCorrespondUser = (state: RootState) =>
  state.messengerReducer.correspondUser;
export default messengerSlice.reducer;
