import { FC } from 'react';
import CommentIcon from '@mui/icons-material/Comment';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import PostLikes from '../post-features/likes/PostLikes';
import CommentList from '../post-features/comment/comment-list/CommentList';
import AddComment from '../post-features/comment/add-comment/AddComment';
import PostMenu from '../post-options/menu-button/PostMenu';
import type { IPost } from '@/types/post';
import {
  SinglePostContainer,
  SinglePostHeader,
  SinglePostBody,
  CustomAvatar,
  PostInfoWrapper,
  NamesWrapper,
  SinglePostMediaContent,
  MediaItem,
  SinglePostReaction,
  SinglePostCommentContainer,
  SinglePostFooter,
} from './style';

type SinglePostProps = {
  post: IPost;
};

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  const { data } = useGetUserQuery();
  const userData = data;
  return (
    <SinglePostContainer>
      <SinglePostHeader>
        <CustomAvatar src={post.author.avatar?.thumbnail} />
        <PostInfoWrapper>
          <NamesWrapper>
            <span>{post.author.first_name}</span>
            <span>{post.author.last_name}</span>
          </NamesWrapper>
          <span>1hr ago</span>
        </PostInfoWrapper>
        <PostMenu post_id={post._id} />
      </SinglePostHeader>
      <SinglePostBody>
        <p>{post.content}</p>
        <SinglePostMediaContent>
          <MediaItem>
            <img src="" alt="" />
          </MediaItem>
        </SinglePostMediaContent>

        <SinglePostReaction>
          <PostLikes post_id={post._id} />
          <CommentIcon />
        </SinglePostReaction>
      </SinglePostBody>

      <SinglePostCommentContainer>
        <CommentList post_id={post._id} user={userData} />
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
