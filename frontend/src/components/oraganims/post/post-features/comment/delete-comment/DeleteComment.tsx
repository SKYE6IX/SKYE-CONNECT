'use client';
import { FC } from 'react';
import styled from 'styled-components';
import { DeleteIcon } from '@/components/atoms/MUIComponents/Components';
import { useDeleteCommentMutation } from '@/globalRedux/service/postApi';

type DeleteCommentProps = {
  comment_id: number;
  post_id: number;
};

const DeleteCommentButton = styled.button`
  margin-left: auto;
  border: none;
  background: none;
  cursor: pointer;
`;

const DeleteComment: FC<DeleteCommentProps> = ({ post_id, comment_id }) => {
  const [deleteComment, { isLoading }] = useDeleteCommentMutation();
  const handleClick = async () => {
    await deleteComment({ postID: post_id, commentID: comment_id });
  };
  return (
    <DeleteCommentButton onClick={handleClick} disabled={isLoading}>
      <DeleteIcon style={{ fontSize: '0.9rem' }} />
    </DeleteCommentButton>
  );
};

export default DeleteComment;
