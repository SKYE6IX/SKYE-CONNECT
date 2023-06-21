'use client';
import styled from 'styled-components';
import Menu from '@mui/material/Menu';

export const PostMenuButtonContainer = styled.div`
  margin-left: auto;
`;

export const CustomMenu = styled(Menu)`
  & .MuiMenu-paper {
    min-width: 90px;
    padding-left: 0.3em;
  }
`;
