'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const ConnectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
export const Connect = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  gap: 1em;
`;

export const CustomAvatar = styled(Avatar)`
  height: 65px;
  width: 65px;
`;

export const TextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  div {
    display: flex;
    gap: 0.3em;
    span {
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
  p {
    margin: 0px;
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ConnectButton = styled.button`
  margin-left: auto;
  border: none;
  height: 30px;
  font-size: 0.8rem;
  font-weight: 300;
  cursor: pointer;
  border-radius: 1em;
`;
