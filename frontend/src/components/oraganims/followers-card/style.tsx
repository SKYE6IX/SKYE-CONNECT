'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const FollowersCardContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  border-radius: 1rem;
  padding: 0.8rem 1rem;
  height: 400px;
  h4 {
    margin: 0px;
    margin-bottom: 0.8em;
    font-size: 1.2rem;
    font-weight: 300;
  }
`;

export const Followers = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0.5rem 0;
`;

export const CustomAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
`;

export const FollowersCardTextContents = styled.div`
  div {
    display: flex;
    gap: 0.3em;
  }
  span {
    font-size: 1.2rem;
    font-weight: 300;
  }
  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;
