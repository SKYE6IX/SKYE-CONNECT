import { FC } from 'react';
import AddIcon from '@mui/icons-material/Add';
import {
  FollowerSuggestionCardContainer,
  FollowerSuggestionCardTitle,
  Follower,
  FollowerAvatar,
  FollowerName,
  FollowerSuggestionCardContainerAction,
} from './style';
import { useGetAllUserQuery } from '@/service/userApi';
import type { User } from '@/types/user';

type FollowerSuggestionCardProps = {
  user: User | null;
};

const FollowerSuggestionCard: FC<FollowerSuggestionCardProps> = ({ user }) => {
  const { data: otherUsers, isLoading } = useGetAllUserQuery();

  const isFollowerExist = (
    user: User | null,
    otherUserId: number
  ): boolean | undefined => {
    const isFollowerExist = user?.following.some((followingUser) => {
      return String(followingUser._id) === String(otherUserId);
    });
    return isFollowerExist;
  };

  return (
    <FollowerSuggestionCardContainer>
      <FollowerSuggestionCardTitle>
        People you may follow
      </FollowerSuggestionCardTitle>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        otherUsers?.map((otherUser) => (
          <Follower key={otherUser._id}>
            <FollowerAvatar />
            <FollowerName>
              <span>{otherUser.first_name}</span>
              <span>{otherUser.last_name}</span>
            </FollowerName>
            <FollowerSuggestionCardContainerAction>
              {isFollowerExist(user, otherUser._id) ? (
                <span>Following</span>
              ) : (
                <button>
                  <AddIcon />
                </button>
              )}
            </FollowerSuggestionCardContainerAction>
          </Follower>
        ))
      )}
    </FollowerSuggestionCardContainer>
  );
};

export default FollowerSuggestionCard;
