'use client';
import React, { FC } from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeletePostButton from '../delete-button/DeletePostButon';
import { PostMenuButtonContainer, CustomMenu } from './style';
import type { User } from '@/types/user';

type PostMenuProps = {
  post_id: number;
  user: User | undefined;
};

const PostMenu: FC<PostMenuProps> = ({ post_id, user }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const isUserPost = (post_id: number) => {
    const checkUserPost = user?.posts.some((post) => post._id === post_id);
    return checkUserPost;
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
      <CustomMenu
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
        {isUserPost(post_id) && <DeletePostButton post_id={post_id} />}
      </CustomMenu>
    </PostMenuButtonContainer>
  );
};

export default PostMenu;
