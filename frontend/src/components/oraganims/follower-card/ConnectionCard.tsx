import { FC } from 'react';
import {
  ChatIcon,
  ClearIcon,
} from '@/components/atoms/MUIComponents/Components';
import {
  ConnectionCardContainer,
  ConnectionCardTitle,
  Connection,
  ConnectionAvatar,
  ConnectionInfoWrapper,
  ConnectionName,
  ConnectionAboutMe,
  ConnectionCardActions,
} from './style';
import { useRemoveFollowerMutation } from '@/globalRedux/service/userApi';
import type { CardsProps } from '@/types/user';
type ConnectionCardProps = CardsProps;

const ConnectionCard: FC<ConnectionCardProps> = ({ user }) => {
  const [removeFollower] = useRemoveFollowerMutation();
  const handleRemoveButton = async (follower_id: number) => {
    await removeFollower(follower_id);
  };
  return (
    <ConnectionCardContainer>
      <ConnectionCardTitle>Connections</ConnectionCardTitle>
      {user?.following.map((follow) => (
        <Connection key={follow._id}>
          <ConnectionAvatar
            alt={follow.first_name}
            src={follow.avatar?.thumbnail}
          />
          <ConnectionInfoWrapper>
            <ConnectionName>
              <span>{follow.first_name}</span>
              <span>{follow.last_name}</span>
            </ConnectionName>
            <ConnectionAboutMe>
              {follow?.about_me?.substring(0, 30)}
            </ConnectionAboutMe>
          </ConnectionInfoWrapper>
          <ConnectionCardActions>
            <button>
              <ChatIcon style={{ width: '18px', height: '18px' }} />
            </button>
            <button>
              <ClearIcon
                style={{ width: '18px', height: '18px' }}
                onClick={() => {
                  handleRemoveButton(follow._id);
                }}
              />
            </button>
          </ConnectionCardActions>
        </Connection>
      ))}
    </ConnectionCardContainer>
  );
};
export default ConnectionCard;
