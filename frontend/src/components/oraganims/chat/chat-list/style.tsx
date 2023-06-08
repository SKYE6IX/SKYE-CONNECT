'use client';
import styled from 'styled-components';
import { Avatar } from '@/components/atoms/MUIComponents/Components';

export const ChatListContainer = styled.div``;

export const ChatWrapper = styled.div`
  display: flex;
  margin: 0 0 1em 0;
`;
export const ChatAvatar = styled(Avatar)``;

export const ChatName = styled.div`
  span {
    margin: 0.2em;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }
`;