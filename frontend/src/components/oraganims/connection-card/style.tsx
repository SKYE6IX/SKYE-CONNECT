'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const ConnectionCardContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1.5rem;
  height: 350px;
  padding: 0.5rem 0.7rem;
`;
export const ConnectionCardTitle = styled.h4`
  font-weight: 400;
`;
export const Connection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;
export const ConnectionAvatar = styled(Avatar)`
  height: 40px;
  width: 40px;
`;

export const ConnectionInfoWrapper = styled.div`
  span {
    margin: 0 0.2rem;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;
export const ConnectionName = styled.div``;

export const ConnectionAboutMe = styled.p`
  margin: 0;
  font-size: 0.9rem;
  font-weight: 300;
`;
export const ConnectionCardActions = styled.div`
  margin-left: auto;
  button {
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
`;
