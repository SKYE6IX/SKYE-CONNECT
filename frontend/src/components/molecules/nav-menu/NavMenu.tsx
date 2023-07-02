import { FC } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';

import { MenuContainer, MenuItem } from './style';

const NavMenu: FC = () => {
  return (
    <MenuContainer>
      <MenuItem>
        <HomeIcon />
        <span>Home</span>
      </MenuItem>
      <MenuItem>
        <PeopleIcon />
        <span>My Connects</span>
      </MenuItem>
      <MenuItem>
        <ChatIcon />
        <span>Messager</span>
      </MenuItem>
      <MenuItem>
        <NotificationsIcon />
        <span>Notification</span>
      </MenuItem>
      <MenuItem>
        <Avatar />
        <span>Me</span>
      </MenuItem>
    </MenuContainer>
  );
};

export default NavMenu;
