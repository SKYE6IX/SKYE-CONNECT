'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import { useCreateNewChatMutation } from '@/globalRedux/service/chatApi';
import { useAppDispatch } from '@/hooks/appStateHooks';
import {
  setChatRoomUrl,
  setCorrespondUser,
} from '@/globalRedux/feature/messengerSlice';
import Loading from './Loading';
import {
  ConnectionsListContainer,
  Connection,
  CustomAvatar,
  TextInfoWrapper,
  BottonWrapper,
  ConnectionButton,
} from './style';
import type { User } from '@/types/user';

const ConnectionsList: FC = () => {
  const { data, isLoading } = useGetUserQuery();
  const [createNewChat] = useCreateNewChatMutation();
  const connections = data?.following!;

  const dispatch = useAppDispatch();
  const router = useRouter();

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

  if (isLoading) return <Loading />;
  return (
    <ConnectionsListContainer>
      {connections.map((connection) => (
        <Connection key={connection._id}>
          <Link href={`/${connection._id}`}>
            <CustomAvatar
              src={connection.avatar?.thumbnail}
              alt={connection.first_name}
            />
          </Link>

          <TextInfoWrapper>
            <div>
              <span>{connection.first_name}</span>
              <span>{connection.last_name}</span>
            </div>
            <p>{connection.about_me}</p>
          </TextInfoWrapper>

          <BottonWrapper>
            <ConnectionButton
              onClick={() => {
                handleStartChatButton(connection._id);
                handleSetCorrespondUser(connection);
              }}
            >
              Message
            </ConnectionButton>
            <ConnectionButton>Disconnect</ConnectionButton>
          </BottonWrapper>
        </Connection>
      ))}
    </ConnectionsListContainer>
  );
};

export default ConnectionsList;
