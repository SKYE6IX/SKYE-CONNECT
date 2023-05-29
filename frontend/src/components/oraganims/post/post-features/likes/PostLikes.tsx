import { FC } from 'react';
import {
  FavoriteBorderIcon,
  FavoriteIcon,
} from '@/components/atoms/MUIComponents/Components';
import { PostLikesContainer } from './stye';

const AddLike = () => {
  return <FavoriteBorderIcon />;
};
const RemoveLike = () => {
  return <FavoriteIcon />;
};

const PostLikes: FC = () => {
  return (
    <PostLikesContainer>
      <span>0</span>
      <AddLike />
      <span>Like</span>
    </PostLikesContainer>
  );
};

export default PostLikes;
