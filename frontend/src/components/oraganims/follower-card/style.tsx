'use client';
import styled from 'styled-components';
import { Avatar } from '@/components/atoms/MUIComponents/Components';

export const FollowerCardContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  height: 350px;
  padding: 0.5rem 0.7rem;
`;
export const FollowerCardTitle = styled.h4`
  font-weight: 400;
`;
export const Follower = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
export const FollowerAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
`;

export const FollowerInfoWrapper = styled.div`
  span {
    margin: 0 0.2rem;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
export const FollowerName = styled.div``;

export const FollowerAboutMe = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
`;
export const FollowerCardActions = styled.div`
  margin-left: auto;
  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;
