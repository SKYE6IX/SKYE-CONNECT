import { FC, useState } from 'react';
import PostCard from '../post/post-card/PostCard';
import {
  DashboardPostContainer,
  DashboardPostHeader,
  DashboardPostHeaderButton,
  Divider,
  DashboardPostsWrapper,
} from './style';
import type { IPost } from '@/types/post';

type OtherUsersDashboardPostListProps = {
  user_posts: IPost[];
  liked_posts: IPost[];
};
enum DashboardPostsOption {
  USER_POSTS = 'USER_POSTS',
  LIKED_POSTS = 'LIKED_POSTS',
}

const OtherUsersDashboardPostList: FC<OtherUsersDashboardPostListProps> = ({
  user_posts,
  liked_posts,
}) => {
  const [activePost, setActivePost] = useState<string>(
    DashboardPostsOption.USER_POSTS
  );

  const isUserPostsActive = activePost === DashboardPostsOption.USER_POSTS;
  const isLikedPostsActive = activePost === DashboardPostsOption.LIKED_POSTS;

  const handleSetActivePosts = (option: string) => {
    setActivePost(option);
  };

  return (
    <DashboardPostContainer>
      <DashboardPostHeader>
        <ul>
          <DashboardPostHeaderButton
            $isPostActive={isUserPostsActive}
            onClick={() =>
              handleSetActivePosts(DashboardPostsOption.USER_POSTS)
            }
          >
            My posts
          </DashboardPostHeaderButton>
          <DashboardPostHeaderButton
            $isPostActive={isLikedPostsActive}
            onClick={() =>
              handleSetActivePosts(DashboardPostsOption.LIKED_POSTS)
            }
          >
            Liked posts
          </DashboardPostHeaderButton>
        </ul>
      </DashboardPostHeader>
      <Divider />

      <DashboardPostsWrapper>
        {isUserPostsActive &&
          user_posts?.map((post) => <PostCard post={post} key={post._id} />)}
        {isLikedPostsActive &&
          liked_posts?.map((post) => <PostCard post={post} key={post._id} />)}
      </DashboardPostsWrapper>
    </DashboardPostContainer>
  );
};

export default OtherUsersDashboardPostList;
