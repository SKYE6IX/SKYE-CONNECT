'use client';
import { FC } from 'react';
import CreatePost from '@/components/oraganims/post/create-post/CreatePost';
import PostCard from '@/components/oraganims/post/post-card/PostCard';
import { useGetPostsQuery } from '@/globalRedux/service/postApi';
import type { IPost } from '@/types/post';
const PostsTemplate: FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery();

  return (
    <>
      <CreatePost />
      <h4>Feeds</h4>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.map((post) => {
          return <PostCard post={post} key={post._id} />;
        })
      )}
    </>
  );
};

export default PostsTemplate;
