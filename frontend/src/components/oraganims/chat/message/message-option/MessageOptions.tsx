'use client';
import { FC, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CustomMenu } from './style';

type MessageOptionsProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
};

const MessageOptions: FC<MessageOptionsProps> = ({
  anchorEl,
  open,
  handleClose,
}) => {
  return (
    <CustomMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
      <MenuItem>
        Edit
        <EditIcon />
      </MenuItem>

      <MenuItem>
        Delete
        <DeleteIcon />
      </MenuItem>
    </CustomMenu>
  );
};

export default MessageOptions;
