'use client';
import { FC, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteMessageMutation } from '@/globalRedux/service/chatApi';
import { CustomMenu } from './style';

type MessageOptionsProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  chat_id: string;
  message_id: number;
};

const MessageOptions: FC<MessageOptionsProps> = ({
  anchorEl,
  open,
  handleClose,
  chat_id,
  message_id,
}) => {
  const [deleteMessage, { isLoading }] = useDeleteMessageMutation();

  const handleDeleteMessage = async () => {
    handleClose();
    await deleteMessage({ chat_id, message_id });
  };

  return (
    <CustomMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem>
        Edit
        <EditIcon />
      </MenuItem>

      <MenuItem onClick={handleDeleteMessage} disabled={isLoading}>
        Delete
        <DeleteIcon />
      </MenuItem>
    </CustomMenu>
  );
};

export default MessageOptions;
