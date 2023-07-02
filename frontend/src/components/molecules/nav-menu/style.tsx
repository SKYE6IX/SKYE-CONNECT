'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const MenuContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1.5em;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1em;
  cursor: pointer;
  span {
    font-size: 0.8rem;
    font-weight: 300;
  }
  svg {
    font-size: 1.8rem;
  }
`;

export const CustomAvatar = styled(Avatar)`
  height: 28.8px;
  width: 28.8px;
`;
