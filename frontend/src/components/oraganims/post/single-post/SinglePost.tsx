import { FC } from 'react';
import type { IPost } from '@/types/post';
import {
  SinglePostContainer,
  SinglePostHeader,
  SinglePostBody,
  CustomAvatar,
  SinglePostNames,
} from './style';

type SinglePostProps = {
  post: IPost | undefined;
};

const SinglePost: FC<SinglePostProps> = ({ post }) => {
  return (
    <SinglePostContainer>
      <SinglePostHeader>
        <CustomAvatar />
        <SinglePostNames>
          <span>{post?.author.first_name}</span>
          <span>{post?.author.last_name}</span>
        </SinglePostNames>
      </SinglePostHeader>
      <SinglePostBody></SinglePostBody>
    </SinglePostContainer>
  );
};

export default SinglePost;
