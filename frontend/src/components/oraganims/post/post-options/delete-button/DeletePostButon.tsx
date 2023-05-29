import { FC } from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
  border: none;
  background-color: inherit;
  font-family: 'Roboto', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  &:hover {
    background: none;
  }
`;

const DeletePostButton: FC = () => {
  return <CustomButton>Delete</CustomButton>;
};

export default DeletePostButton;
