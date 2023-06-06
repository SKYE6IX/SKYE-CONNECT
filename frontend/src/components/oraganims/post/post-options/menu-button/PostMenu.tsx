'use client';
import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeletePostButton from '../delete-button/DeletePostButon';
import { PostMenuButtonContainer } from './style';

type PostMenuProps = {
  post_id: number;
};

const PostMenu: FC<PostMenuProps> = ({ post_id }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <PostMenuButtonContainer>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical: 20,
          horizontal: 55,
        }}
      >
        <MenuItem>
          <DeletePostButton post_id={post_id} />
        </MenuItem>
      </Menu>
    </PostMenuButtonContainer>
  );
};

export default PostMenu;
