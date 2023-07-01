'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import ChatIcon from '@mui/icons-material/Chat';
import ClearIcon from '@mui/icons-material/Clear';
import { useRemoveFollowerMutation } from '@/globalRedux/service/userApi';
import { useCreateNewChatMutation } from '@/globalRedux/service/chatApi';
import { useAppDispatch } from '@/hooks/appStateHooks';
import {
  setChatRoomUrl,
  setCorrespondUser,
} from '@/globalRedux/feature/messengerSlice';
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
import type { CardsProps, User } from '@/types/user';

type ConnectionCardProps = CardsProps;

const ConnectionCard: FC<ConnectionCardProps> = ({ user }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [removeFollower] = useRemoveFollowerMutation();
  const [createNewChat] = useCreateNewChatMutation();

  const handleRemoveButton = async (follower_id: number) => {
    await removeFollower(follower_id);
  };

  const handleStartChatButton = async (follow_user_id: number) => {
    await createNewChat(follow_user_id)
      .unwrap()
      .then((result) => {
        router.push(`/messenger/${result._id}`);
        dispatch(setChatRoomUrl(result._id));
      });
  };

  const handleSetCorrespondUser = (correspondUser: User) => {
    dispatch(
      setCorrespondUser({
        id: correspondUser._id,
        avatar: correspondUser.avatar?.thumbnail,
        first_name: correspondUser.first_name,
        last_name: correspondUser.last_name,
      })
    );
  };

  return (
    <ConnectionCardContainer>
      <ConnectionCardTitle>Connections</ConnectionCardTitle>
      {user?.following?.map((follow) => (
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
            <button
              onClick={() => {
                handleStartChatButton(follow._id);
                handleSetCorrespondUser(follow);
              }}
            >
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
