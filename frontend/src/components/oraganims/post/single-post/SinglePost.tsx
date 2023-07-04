'use client';
import { FC } from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import moment from 'moment';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import PostLikes from '../post-features/likes/PostLikes';
import CommentList from '../post-features/comment/comment-list/CommentList';
import AddComment from '../post-features/comment/add-comment/AddComment';
import PostMenu from '../post-options/menu-button/PostMenu';
import Carousels from './carosel/Carosel';
import type { IPost } from '@/types/post';
import {
  SinglePostContainer,
  SinglePostHeader,
  SinglePostBody,
  CustomAvatar,
  PostInfoWrapper,
  NamesWrapper,
  SinglePostReaction,
  SinglePostCommentContainer,
  NoCommentMessage,
  SinglePostFooter,
} from './style';

type SinglePostProps = {
  post: IPost;
};

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  const { data } = useGetUserQuery();
  const userData = data;
  const getTimeCreated = new Date(post.created_at);
  const formatCreatedTime = moment(getTimeCreated).fromNow();

  return (
    <SinglePostContainer>
      <SinglePostHeader>
        <CustomAvatar src={post.author.avatar?.thumbnail} />
        <PostInfoWrapper>
          <NamesWrapper>
            <span>{post.author.first_name}</span>
            <span>{post.author.last_name}</span>
          </NamesWrapper>
          <span>{formatCreatedTime}</span>
        </PostInfoWrapper>
        <PostMenu post_id={post._id} user={userData} />
      </SinglePostHeader>

      <SinglePostBody>
        <p>{post.content}</p>

        {post.photos?.length && <Carousels photos={post.photos} />}

        <SinglePostReaction>
          <PostLikes post_id={post._id} />
          <CommentIcon />
        </SinglePostReaction>
      </SinglePostBody>

      <SinglePostCommentContainer>
        {post.comments.length ? (
          <CommentList post_id={post._id} user={userData} />
        ) : (
          <NoCommentMessage>
            <p>First to leave a comment...</p>
          </NoCommentMessage>
        )}
      </SinglePostCommentContainer>

      <SinglePostFooter>
        <CustomAvatar
          src={userData?.avatar?.thumbnail}
          alt={userData?.first_name}
        />
        <AddComment post_id={post._id} />
      </SinglePostFooter>
    </SinglePostContainer>
  );
};

export default SinglePost;
