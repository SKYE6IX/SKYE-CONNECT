import { FC } from 'react';
import {
  FollowersCardContainer,
  Followers,
  CustomAvatar,
  FollowersCardTextContents,
  FollowersCardsAction,
} from './style';
import type { User } from '@/types/user';

type OtherUsersFollowerCardProps = {
  followers: User[];
  authUser: User | undefined;
};

const OtherUsersFollowerCard: FC<OtherUsersFollowerCardProps> = ({
  followers,
  authUser,
}) => {
  const padTextEnd = (txt: string) => {
    const padResult = txt.split(' ').slice(0, 3).join(' ').padEnd(25, '.');
    return padResult;
  };

  const isFollowerExist = (
    user: User | undefined,
    otherUserId: number
  ): boolean | undefined => {
    const isFollowerExist = user?.following?.some((followingUser) => {
      return String(followingUser._id) === String(otherUserId);
    });
    return isFollowerExist;
  };

  return (
    <FollowersCardContainer>
      <h4>Followers</h4>
      {followers?.map((follower) => (
        <Followers key={follower._id}>
          <CustomAvatar
            src={follower.avatar?.thumbnail}
            alt={follower.first_name}
          />
          <FollowersCardTextContents>
            <div>
              <span>{follower.first_name}</span>
              <span>{follower.last_name}</span>
            </div>
            <p>{follower.about_me && padTextEnd(follower.about_me)}</p>
          </FollowersCardTextContents>
          <FollowersCardsAction>
            {isFollowerExist(authUser, follower._id) ? (
              <span>Following</span>
            ) : (
              <button>Follow</button>
            )}
          </FollowersCardsAction>
        </Followers>
      ))}
    </FollowersCardContainer>
  );
};

export default OtherUsersFollowerCard;
