'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin: 20px 0px;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
export const PostCardHeader = styled.div`
  display: flex;
  gap: 0.5em;
`;
export const PostCardAvatar = styled(Avatar)`
  width: 45px;
  height: 45px;
`;
export const PostCardNames = styled.div`
  span,
  p {
    margin: 0.4rem 0.2rem;
    font-family: 'Roboto', sans-serif;
  }
  p {
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export const PostCardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    color: inherit;
    text-decoration: none;
  }
`;

export const PostCardTextContent = styled.p`
  line-height: 2rem;
  font-weight: 300;
  font-size: 1.1rem;
  align-self: flex-start;
`;

export const PostCardReaction = styled.div`
  display: flex;
  gap: 2rem;
  padding: 0 1.2rem;
`;

export const PostCardCommentsWrapper = styled.div`
  max-height: 200px;
  overflow-y: scroll;
`;

export const PostCardFooter = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;
`;
