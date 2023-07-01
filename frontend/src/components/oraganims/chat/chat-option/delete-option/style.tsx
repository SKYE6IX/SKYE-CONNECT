'use client';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export const DeleteChatOptionHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.5em 0 0 0;
`;

export const CustomAvatar = styled(Avatar)`
  width: 60px;
  height: 60px;
`;

export const CustomDialog = styled(Dialog)`
  & .css-1t1j96h-MuiPaper-root-MuiDialog-paper {
    min-width: 300px;
    border-radius: 10px;
  },
`;

export const CustomDialogTitle = styled(DialogTitle)`
  font-size: 0.9rem;
  font-weight: 300;
`;

export const CustomListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
`;

export const CustomListItemButton = styled(ListItemButton)`
  width: 100%;
  text-align: center;
  color: red;
  &:last-child {
    color: blue;
  },
`;

export const CustomListItemText = styled(ListItemText)`
  font-size: 1rem;
  font-weight: 300;
`;
