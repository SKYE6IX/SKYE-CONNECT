'use client';
import styled from 'styled-components';
import { Avatar } from '@/components/atoms/MUIComponents/Components';

export const FollowerSuggestionCardContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  height: 400px;
  padding: 0.5rem 0.7rem;
`;

export const FollowerSuggestionCardTitle = styled.h4`
  font-weight: 400;
`;

export const Follower = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

export const FollowerAvatar = styled(Avatar)``;

export const FollowerName = styled.div`
  span {
    margin: 0 0.2rem;
  }
`;
export const FollowerSuggestionCardContainerAction = styled.div`
  margin-left: auto;
  button {
    border: none;
    background: inherit;
    cursor: pointer;
  }
`;
