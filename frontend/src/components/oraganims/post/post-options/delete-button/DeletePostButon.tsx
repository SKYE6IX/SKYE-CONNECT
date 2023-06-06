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
  font-size: 0.8rem;
  font-weight: 500;
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
    await deletePost(post_id);
  };
  return (
    <CustomButton onClick={handleClick} disabled={isLoading}>
      Delete
    </CustomButton>
  );
};

export default DeletePostButton;
