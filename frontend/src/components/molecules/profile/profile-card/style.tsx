'use client';
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

const SharedStyles = styled.div`
  display: flex;
`;

export const ProfileCardContainer = styled(SharedStyles)`
  gap: 1em;
  width: 100%;
  padding: 0.5em;
  background-color: #eee;
  border-radius: 0px 0px 1em 1em;
`;
export const CustomAvatar = styled(Avatar)`
  width: 110px;
  height: 110px;
`;

export const ProfileCardTextContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  max-width: 400px;
  p {
    margin: 0px;
    font-size: 1rem;
    font-weight: 300;
  }
`;
export const NamesWrapper = styled(SharedStyles)`
  gap: 0.5em;
  span {
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

export const OtherInfoWrapper = styled(SharedStyles)`
  gap: 1em;
  div {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }
  span {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

export const ButtonWrapper = styled(SharedStyles)`
  gap: 0.8em;
  margin-left: auto;
  button {
    height: 2em;
    border: none;
    border-radius: 0.5em;
    background-color: #454545;
    color: white;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 300;
    padding: 0.5em;
  }
`;
