'use client';
import styled from 'styled-components';
import { Avatar } from '@/components/atoms/MUIComponents/Components';
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

export const ClickToChatRoomWrapper = styled.div`
  width: 100%;
  padding: 0.5em;
  cursor: pointer;
`;

export const LastMessageTag = styled.p`
  margin: 0.3em 0 0 0;
  font-weight: 300;
`;
