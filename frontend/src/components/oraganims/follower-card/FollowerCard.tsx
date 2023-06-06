import { FC } from 'react';
import {
  ChatIcon,
  ClearIcon,
} from '@/components/atoms/MUIComponents/Components';
import {
  FollowerCardContainer,
  FollowerCardTitle,
  Follower,
  FollowerAvatar,
  FollowerInfoWrapper,
  FollowerName,
  FollowerAboutMe,
  FollowerCardActions,
} from './style';
import type { CardsProps } from '@/types/user';
type FollowerCardProps = CardsProps;
const FollowerCard: FC<FollowerCardProps> = ({ user }) => {
  return (
    <FollowerCardContainer>
      <FollowerCardTitle>Followers</FollowerCardTitle>
      {user?.followers.map((follower) => (
        <Follower key={follower._id}>
          <FollowerAvatar
            alt={follower.first_name}
            src={follower.avatar?.thumbnail}
          />
          <FollowerInfoWrapper>
            <FollowerName>
              <span>{follower.first_name}</span>
              <span>{follower.last_name}</span>
            </FollowerName>
            <FollowerAboutMe>
              {follower?.about_me?.substring(0, 30)}
            </FollowerAboutMe>
          </FollowerInfoWrapper>
          <FollowerCardActions>
            <button>
              <ChatIcon style={{ width: '18px', height: '18px' }} />
            </button>
            <button>
              <ClearIcon style={{ width: '18px', height: '18px' }} />
            </button>
          </FollowerCardActions>
        </Follower>
      ))}
    </FollowerCardContainer>
  );
};

export default FollowerCard;
