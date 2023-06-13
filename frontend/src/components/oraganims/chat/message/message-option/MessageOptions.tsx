'use client';
import { FC } from 'react';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteMessageMutation } from '@/globalRedux/service/chatApi';
import { useAppDispatch } from '@/hooks/appStateHooks';
import { setEditMessage } from '@/globalRedux/feature/messengerSlice';
import { CustomMenu } from './style';

type MessageOptionsProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  chat_id: string;
  message_id: number;
  message_text: string;
};

const MessageOptions: FC<MessageOptionsProps> = ({
  anchorEl,
  open,
  handleClose,
  chat_id,
  message_id,
  message_text,
}) => {
  const dispatch = useAppDispatch();
  const [deleteMessage, { isLoading }] = useDeleteMessageMutation();

  const handleDeleteMessage = async () => {
    handleClose();
    await deleteMessage({ chat_id, message_id });
  };

  const handleEditMesssage = () => {
    dispatch(
      setEditMessage({
        message_id: String(message_id),
        message_edit_text: message_text,
        isEditing: true,
      })
    );
    handleClose();
  };

  return (
    <CustomMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem onClick={handleEditMesssage}>
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
