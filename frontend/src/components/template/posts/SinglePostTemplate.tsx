'use client';
import { FC } from 'react';
import { useGetPostQuery } from '@/globalRedux/service/postApi';
import SinglePost from '@/components/oraganims/post/single-post/SinglePost';

type SinglePostTemplateProps = {
  post_id: string;
};

const SinglePostTemplate: FC<SinglePostTemplateProps> = ({ post_id }) => {
  const { data, isLoading } = useGetPostQuery(post_id);

  console.log(data);
  return <SinglePost post={data} />;
};

export default SinglePostTemplate;
