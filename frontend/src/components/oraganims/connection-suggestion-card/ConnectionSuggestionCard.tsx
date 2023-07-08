import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  useGetAllUserQuery,
  useAddFollowerMutation,
} from '@/globalRedux/service/userApi';
import Loading from '@/components/molecules/loading/Loading';
import {
  ConnectionSuggestionCardContainer,
  ConnectionSuggestionCardTitle,
  Connection,
  ConnectionAvatar,
  ConnectionName,
  ConnectionSuggestionCardContainerAction,
} from './style';

import type { CardsProps, User } from '@/types/user';

type ConnectionSuggestionCardProps = CardsProps;

const ConnectionSuggestionCard: FC<ConnectionSuggestionCardProps> = ({
  user,
}) => {
  const { data: otherUsers, isLoading } = useGetAllUserQuery();
  const [addFollower, { isLoading: isAddFollowerLoading }] =
    useAddFollowerMutation();

  const isFollowerExist = (
    user: User | undefined,
    otherUserId: number
  ): boolean | undefined => {
    const isFollowerExist = user?.following?.some((followingUser) => {
      return String(followingUser._id) === String(otherUserId);
    });
    return isFollowerExist;
  };

  const handleClick = async (other_user_id: number) => {
    await addFollower(other_user_id);
  };

  return (
    <ConnectionSuggestionCardContainer>
      <ConnectionSuggestionCardTitle>
        People you may connect with...
      </ConnectionSuggestionCardTitle>
      {isLoading ? (
        <Loading />
      ) : (
        otherUsers?.map((otherUser) => (
          <Connection key={otherUser._id}>
            <ConnectionAvatar
              src={otherUser.avatar?.thumbnail}
              alt={otherUser.first_name}
            />
            <ConnectionName>
              <span>{otherUser.first_name}</span>
              <span>{otherUser.last_name}</span>
            </ConnectionName>
            <ConnectionSuggestionCardContainerAction>
              {isFollowerExist(user, otherUser._id) ? (
                <span>Following</span>
              ) : (
                <button
                  onClick={() => {
                    handleClick(otherUser._id);
                  }}
                  disabled={isAddFollowerLoading}
                >
                  <AddIcon />
                </button>
              )}
            </ConnectionSuggestionCardContainerAction>
          </Connection>
        ))
      )}
    </ConnectionSuggestionCardContainer>
  );
};
export default ConnectionSuggestionCard;
