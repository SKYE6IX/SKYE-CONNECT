import { FC } from 'react';
import {
  FollowersCardContainer,
  Followers,
  CustomAvatar,
  FollowersCardTextContents,
} from './style';
import type { User } from '@/types/user';

type FollowersCardProps = {
  followers: User[] | undefined;
};

const FollowersCard: FC<FollowersCardProps> = ({ followers }) => {
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
            <p>{follower.about_me}</p>
          </FollowersCardTextContents>
        </Followers>
      ))}
    </FollowersCardContainer>
  );
};

export default FollowersCard;
