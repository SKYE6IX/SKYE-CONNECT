'use client';
import { FC } from 'react';
import Link from 'next/link';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { MenuContainer, MenuItem, CustomAvatar } from './style';

const NavMenu: FC = () => {
  return (
    <MenuContainer>
      <Link href="/feeds">
        <MenuItem>
          <HomeIcon />
          <span>Home</span>
        </MenuItem>
      </Link>
      <MenuItem>
        <PeopleIcon />
        <span>My Connects</span>
      </MenuItem>
      <Link href="/messenger">
        <MenuItem>
          <ChatIcon />
          <span>Messager</span>
        </MenuItem>
      </Link>
      <MenuItem>
        <NotificationsIcon />
        <span>Notification</span>
      </MenuItem>
      <MenuItem>
        <CustomAvatar />
        <span>Me</span>
      </MenuItem>
    </MenuContainer>
  );
};

export default NavMenu;
