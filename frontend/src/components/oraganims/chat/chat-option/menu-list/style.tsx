'use client';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const CustomMenu = styled(Menu)`
  & .MuiPaper-root {
    min-height: 30px;
    min-width: 120px;
    max-width: calc(100% - 240px);
    max-height: calc(100% - 100px);
  }
`;
export const CustomMenuItem = styled(MenuItem)`
  line-height: 5px;
  font-size: 1rem;
  & :hover {
    background: none;
  }
`;
