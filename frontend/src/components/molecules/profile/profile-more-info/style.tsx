'use client';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';

export const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    width: 600px;
  }
`;
export const MoreInfoCardRows = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  svg {
    font-size: 2rem;
  }
`;
