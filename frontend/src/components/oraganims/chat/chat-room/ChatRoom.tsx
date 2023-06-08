'use client';
import { FC } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Avatar } from '@/components/atoms/MUIComponents/Components';
import { CustomDialog, ChatRoomHeader, ChatRoomName } from './style';

const ChatRoom: FC = () => {
  return (
    <CustomDialog open={false}>
      <DialogTitle>
        <ChatRoomHeader>
          <Avatar />
          <ChatRoomName>
            <span>Azeez</span>
            <span>Azeez</span>
          </ChatRoomName>
        </ChatRoomHeader>
      </DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </CustomDialog>
  );
};

export default ChatRoom;
