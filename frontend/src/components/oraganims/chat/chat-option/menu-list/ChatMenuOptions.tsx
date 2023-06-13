'use client';
import React, { FC, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CustomMenu, CustomMenuItem } from './style';

type ChatMenuOptionsProps = {
  handleOpenDeleteChatOption: () => void;
};

const ChatMenuOptions: FC<ChatMenuOptionsProps> = ({
  handleOpenDeleteChatOption,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openOptions = Boolean(anchorEl);

  const handleOpenOptions = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOptions = () => {
    setAnchorEl(null);
  };
  const handleClickDeleteOption = () => {
    handleOpenDeleteChatOption();
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={openOptions ? 'long-menu' : undefined}
        aria-expanded={openOptions ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleOpenOptions}
      >
        <MoreVertIcon />
      </IconButton>
      <CustomMenu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={openOptions}
        onClose={handleCloseOptions}
        transformOrigin={{
          vertical: 30,
          horizontal: 90,
        }}
      >
        <CustomMenuItem onClick={handleClickDeleteOption}>
          Delete
        </CustomMenuItem>
      </CustomMenu>
    </>
  );
};

export default ChatMenuOptions;
