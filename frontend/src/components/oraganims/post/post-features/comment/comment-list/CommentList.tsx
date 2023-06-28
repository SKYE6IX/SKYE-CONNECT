'use client';
import { FC, useRef, useEffect } from 'react';
import {
  Comment,
  CommentListAvatar,
  CommentListBody,
  Container,
} from './style';
import DeleteComment from '../delete-comment/DeleteComment';
import { useGetCommentsQuery } from '@/globalRedux/service/postApi';
import type { User } from '@/types/user';

type CommentListProps = {
  post_id: number;
  user: User | undefined;
};

const CommentList: FC<CommentListProps> = ({ post_id, user }) => {
  const { data: comments, isLoading } = useGetCommentsQuery(post_id);
  if (isLoading) return <p>Loading...</p>;

  return (
    <Container>
      {comments?.map((comment) => (
        <Comment key={comment._id}>
          <CommentListAvatar
            alt={comment.author?.first_name}
            src={comment.author?.avatar?.thumbnail}
          />
          <CommentListBody>
            <span>{comment.author?.first_name}</span>
            <span>{comment.author?.last_name}</span>
            <p>{comment.content}</p>
            <span>20 min ago</span>
          </CommentListBody>
          {user?._id === comment.author?._id && (
            <DeleteComment post_id={post_id} comment_id={comment._id} />
          )}
        </Comment>
      ))}
    </Container>
  );
};

export default CommentList;
