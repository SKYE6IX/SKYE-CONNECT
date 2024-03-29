import { FC } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {
  useGetPostLikesQuery,
  useAddLikeMutation,
  useRemoveLikeMutation,
} from '@/globalRedux/service/postApi';
import { PostLikesContainer } from './stye';
import type { User } from '@/types/user';

type PostLikesProps = {
  post_id: number;
  user?: User | undefined;
};

const handleClick = async (mutation: any, post_id: number) => {
  await mutation(post_id);
};
const AddLike: FC<PostLikesProps> = ({ post_id }) => {
  const [addLike] = useAddLikeMutation();
  return <FavoriteBorderIcon onClick={() => handleClick(addLike, post_id)} />;
};
const RemoveLike: FC<PostLikesProps> = ({ post_id }) => {
  const [removeLike] = useRemoveLikeMutation();
  return <FavoriteIcon onClick={() => handleClick(removeLike, post_id)} />;
};

const PostLikes: FC<PostLikesProps> = ({ post_id, user }) => {
  const { data } = useGetPostLikesQuery(post_id);
  const isPostLike = () => {
    return user?.likePosts?.some((likePost) => {
      return likePost._id === post_id;
    });
  };

  // const totalLike = data?.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return (
    <PostLikesContainer>
      <span>{data?.length}</span>
      {isPostLike() ? (
        <RemoveLike post_id={post_id} />
      ) : (
        <AddLike post_id={post_id} />
      )}
      <span>Like</span>
    </PostLikesContainer>
  );
};

export default PostLikes;
