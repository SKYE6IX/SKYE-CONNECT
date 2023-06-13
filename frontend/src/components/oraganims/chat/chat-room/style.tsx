'use client ';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
export const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .css-1t1j96h-MuiPaper-root-MuiDialog-paper': {
    width: '500px',
    height: 'calc(100% - 64px)',
  },
}));
export const ChatRoomHeader = styled.div`
  display: flex;
  gap: 0.5em;
`;
export const ChatRoomName = styled.div`
  span {
    margin: 0 0.3em 0 0;
    font-size: 1.3rem;
    font-weight: 300;
  }
`;
export const NoMessage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 2rem;
    color: rgb(216, 216, 216);
  },
`;
