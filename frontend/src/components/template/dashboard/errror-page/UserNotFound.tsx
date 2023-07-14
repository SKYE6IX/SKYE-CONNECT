'use client';
import { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  margin: 0px;
  font-size: 3rem;
  font-weight: 300;
  width: 500px;
  text-align: center;
`;

const UserNotFound: FC = () => {
  return (
    <Container>
      <ErrorMessage>USER NOT FOUND OR DOES NOT EXIST!</ErrorMessage>
    </Container>
  );
};

export default UserNotFound;
