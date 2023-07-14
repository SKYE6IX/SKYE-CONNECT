'use client';
import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import SinglePostError from './error-pages/SinglePostError';
import { useGetPostQuery } from '@/globalRedux/service/postApi';
import SinglePost from '@/components/oraganims/post/single-post/SinglePost';
import { LoadingFeeds } from './style';

type SinglePostTemplateProps = {
  post_id: string;
};

const SinglePostTemplate: FC<SinglePostTemplateProps> = ({ post_id }) => {
  const { data, isLoading, error } = useGetPostQuery(post_id);
  const post = data!;

  if (error) return <SinglePostError />;

  return (
    <>
      {isLoading ? (
        <LoadingFeeds>
          <CircularProgress color="inherit" />
        </LoadingFeeds>
      ) : (
        <SinglePost post={post} />
      )}
    </>
  );
};

export default SinglePostTemplate;
