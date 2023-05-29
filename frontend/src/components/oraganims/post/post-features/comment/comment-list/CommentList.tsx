import { FC } from 'react';
import {
  CommentListContainer,
  CommentListAvatar,
  CommentListBody,
} from './style';
import DeleteComment from '../delete-comment/DeleteComment';
import { useGetCommentsQuery } from '@/service/postApi';
type CommentListProps = {
  postId: number;
};
const CommentList: FC<CommentListProps> = ({ postId }) => {
  const { data: comments, isLoading } = useGetCommentsQuery(postId);
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {comments?.map((comment) => (
        <CommentListContainer key={comment._id}>
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
          <DeleteComment />
        </CommentListContainer>
      ))}
    </>
  );
};

export default CommentList;
