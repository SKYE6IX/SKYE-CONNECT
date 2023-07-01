'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const Container = styled.div`
  max-height: 200px;
  overflow: auto;
`;

export const Comment = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 0.5em 1.5em;
`;

export const CommentListAvatar = styled(Avatar)`
  height: 25px;
  width: 25px;
`;

export const CommentListBody = styled.div`
  p {
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0px;
  }
  span:nth-child(-n + 2) {
    margin: 0.2em 0.1em;
    font-size: 0.8rem;
    font-weight: 300;
  }
  span {
    font-size: 0.7rem;
    font-weight: 300;
  }
`;
