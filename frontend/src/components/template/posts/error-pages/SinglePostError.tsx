'use client';
import { FC } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  margin: 0px;
  font-size: 2rem;
  font-weight: 300;
`;

const SinglePostError: FC = () => {
  return (
    <ErrorContainer>
      <ErrorMessage>Post does not exist!</ErrorMessage>
    </ErrorContainer>
  );
};

export default SinglePostError;
