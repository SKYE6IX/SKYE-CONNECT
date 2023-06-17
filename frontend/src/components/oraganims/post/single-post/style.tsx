'use client';
import styled from 'styled-components';
import { Avatar } from '@/components/atoms/MUIComponents/Components';

export const SinglePostContainer = styled.div``; //TODO LATER

export const SinglePostHeader = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const CustomAvatar = styled(Avatar)`
  width: 55px;
  height: 55px;
`;

export const PostInfoWrapper = styled.div`
  span {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const NamesWrapper = styled.div`
  display: flex;
  gap: 0.5em;
  span {
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export const SinglePostBody = styled.div``; //TODO LATER

export const SinglePostMediaContent = styled.div``; //TODO LATER

export const MediaItem = styled.div``; //TODO LATER

export const SinglePostReaction = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1.2rem;
`;

export const SinglePostCommentContainer = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

export const SinglePostFooter = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;
