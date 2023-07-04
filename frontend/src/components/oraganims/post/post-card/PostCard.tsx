import { FC } from 'react';
import Link from 'next/link';
import moment from 'moment';
import CommentIcon from '@mui/icons-material/Comment';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import PostMenu from '../post-options/menu-button/PostMenu';
import PostLikes from '../post-features/likes/PostLikes';
import AddComment from '../post-features/comment/add-comment/AddComment';
import CommentList from '../post-features/comment/comment-list/CommentList';
import DyanamicGridWrapper from './dynamic-grid-wrapper/DynamicGridWrapper';
import {
  PostCardContainer,
  PostCardHeader,
  PostCardAvatar,
  PostCardBody,
  PostCardNames,
  PostCardFooter,
  PostCardTextContent,
  PostCardReaction,
  PostCardCommentsWrapper,
} from './style';
import type { IPost } from '@/types/post';

type PostCardProps = {
  post: IPost;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  const { data } = useGetUserQuery();
  const userData = data;

  const getTimeCreated = new Date(post.created_at);
  const formatCreatedTime = moment(getTimeCreated).fromNow();

  return (
    <PostCardContainer>
      <PostCardHeader>
        <Link
          href={
            userData?._id === post.author._id
              ? `/dashboard/${userData?.username}`
              : `/${post.author._id}`
          }
        >
          <PostCardAvatar
            alt={post.author.first_name}
            src={post.author.avatar?.thumbnail || ''}
          />
        </Link>
        <PostCardNames>
          <span>{post.author.first_name}</span>
          <span>{post.author.last_name}</span>
          <p>{formatCreatedTime}</p>
        </PostCardNames>
        <PostMenu post_id={post._id} user={userData} />
      </PostCardHeader>

      <PostCardBody>
        <Link href={`/feeds/${post._id}`}>
          <PostCardTextContent>{post.content}</PostCardTextContent>
          <DyanamicGridWrapper
            photos={post.photos}
            photosLength={post.photos.length}
          />
        </Link>
        <PostCardReaction>
          <PostLikes post_id={post._id} user={userData} />
          <CommentIcon>Comment</CommentIcon>
        </PostCardReaction>
      </PostCardBody>

      <PostCardCommentsWrapper>
        <CommentList post_id={post._id} user={userData} />
      </PostCardCommentsWrapper>

      <PostCardFooter>
        <PostCardAvatar
          src={userData?.avatar?.thumbnail}
          alt={userData?.first_name}
        />
        <AddComment post_id={post._id} />
      </PostCardFooter>
    </PostCardContainer>
  );
};

export default PostCard;
