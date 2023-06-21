'use client';
import { FC } from 'react';
import styled from 'styled-components';
import { useDeletePostMutation } from '@/globalRedux/service/postApi';

const CustomButton = styled.button`
  border: none;
  padding: 0px;
  margin: 0px;
  background-color: inherit;
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background: none;
  }
`;

type DeletePostProps = {
  post_id: number;
};

const DeletePostButton: FC<DeletePostProps> = ({ post_id }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleClick = async () => {
    console.log('code run');
    await deletePost(post_id);
  };
  return (
    <CustomButton onClick={handleClick} disabled={isLoading}>
      {isLoading ? 'Deleting...' : 'Delete'}
    </CustomButton>
  );
};

export default DeletePostButton;
