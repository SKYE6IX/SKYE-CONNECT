import { FC } from 'react';
import { CommentIcon } from '@/components/atoms/MUIComponents/Components';
import {
  PostCardContainer,
  PostCardHeader,
  PostCardAvatar,
  PostCardBody,
  PostCardNames,
  PostCardFooter,
  PostCardMediaContent,
  PostCardTextContent,
  MediaItem,
  PostCardReaction,
  PostCardCommentContainer,
} from './style';
import PostMenu from '../post-options/menu-button/PostMenu';
import PostLikes from '../post-features/likes/PostLikes';
import AddComment from '../post-features/comment/add-comment/AddComment';
import CommentList from '../post-features/comment/comment-list/CommentList';
import type { IPost } from '@/types/post';

type PostCardProps = {
  post: IPost;
};

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <PostCardAvatar
          alt={post.author.first_name}
          src={post.author.avatar?.thumbnail || ''}
        />
        <PostCardNames>
          <span>{post.author.first_name}</span>
          <span>{post.author.last_name}</span>
          <p>1 hr ago</p>
        </PostCardNames>
        <PostMenu post_id={post._id} />
      </PostCardHeader>

      <PostCardBody>
        <PostCardTextContent>{post.content}</PostCardTextContent>
        <PostCardMediaContent>
          <MediaItem>
            <img src="" alt="" />
          </MediaItem>
        </PostCardMediaContent>

        <PostCardReaction>
          <PostLikes />
          <CommentIcon>Comment</CommentIcon>
        </PostCardReaction>
      </PostCardBody>

      <CommentList postId={post._id} />

      <PostCardFooter>
        <PostCardAvatar />
        <AddComment />
      </PostCardFooter>
    </PostCardContainer>
  );
};

export default PostCard;
