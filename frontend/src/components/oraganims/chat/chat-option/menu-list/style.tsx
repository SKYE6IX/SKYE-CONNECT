'use client';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';

export const CustomIconButton = styled(IconButton)`
  height: 50px;
  width: 50px;
`;

export const CustomMenu = styled(Menu)`
  & .MuiPaper-root {
    min-height: 30px;
    min-width: 90px;
    max-width: calc(100% - 240px);
    max-height: calc(100% - 100px);
  }
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  margin: 0px;
  width: 100%;
  font-size: 1rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
`;
