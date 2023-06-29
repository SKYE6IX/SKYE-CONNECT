'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CorrespondUser {
  id: number;
  avatar: string | undefined;
  first_name: string;
  last_name: string;
}
interface EditMessage {
  message_id: string;
  message_edit_text: string;
  isEditing: boolean;
}

interface InitialState {
  chatRoomUrl: string;
  correspondUser: CorrespondUser;
  editMessage: EditMessage;
  typingStatus: boolean;
}

const initialState: InitialState = {
  chatRoomUrl: '/messenger/',
  correspondUser: {
    id: 0,
    avatar: '',
    first_name: '',
    last_name: '',
  },
  editMessage: {
    message_id: '',
    message_edit_text: '',
    isEditing: false,
  },
  typingStatus: false,
};

const messengerSlice = createSlice({
  name: 'messengerSlice',
  initialState,
  reducers: {
    setChatRoomUrl: (state, action: PayloadAction<string>) => {
      state.chatRoomUrl = state.chatRoomUrl + action.payload;
    },
    closeChatRoom: (state) => {
      state.chatRoomUrl = initialState.chatRoomUrl;
    },
    setCorrespondUser: (state, action: PayloadAction<CorrespondUser>) => {
      state.correspondUser = action.payload;
    },
    setEditMessage: (state, action: PayloadAction<EditMessage>) => {
      state.editMessage = action.payload;
    },
    clearEditMessage: (state) => {
      state.editMessage = initialState.editMessage;
    },
    setTypingStatus: (state, action: PayloadAction<boolean>) => {
      state.typingStatus = action.payload;
    },
  },
});

export const {
  setChatRoomUrl,
  closeChatRoom,
  setCorrespondUser,
  setEditMessage,
  clearEditMessage,
  setTypingStatus,
} = messengerSlice.actions;

export const selectChatRoomUrl = (state: RootState) =>
  state.messengerReducer.chatRoomUrl;
export const selectCorrespondUser = (state: RootState) =>
  state.messengerReducer.correspondUser;
export const selectEditMessage = (state: RootState) =>
  state.messengerReducer.editMessage;
export const selectTypingStatus = (state: RootState) =>
  state.messengerReducer.typingStatus;

export default messengerSlice.reducer;
