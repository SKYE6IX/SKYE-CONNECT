'use client';
import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import CreatePost from '@/components/oraganims/post/create-post/CreatePost';
import PostCard from '@/components/oraganims/post/post-card/PostCard';
import { useGetPostsQuery } from '@/globalRedux/service/postApi';
import { LoadingFeeds } from './style';
const PostsTemplate: FC = () => {
  const { data, isLoading } = useGetPostsQuery();
  const posts = data!;

  return (
    <>
      <CreatePost />
      <h4>Feeds</h4>
      {isLoading ? (
        <LoadingFeeds>
          <CircularProgress color="inherit" />
        </LoadingFeeds>
      ) : (
        posts.map((post) => {
          return <PostCard post={post} key={post._id} />;
        })
      )}
    </>
  );
};

export default PostsTemplate;
