'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const SinglePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

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

export const SinglePostBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  p {
    margin: 0px;
  }
`;

export const SinglePostReaction = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1.2rem;
`;

export const SinglePostCommentContainer = styled.div`
  max-height: 500px;
  overflow-y: scroll;
`;

export const NoCommentMessage = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 1.5rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
  }
`;

export const SinglePostFooter = styled.div`
  margin-top: auto;
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;
