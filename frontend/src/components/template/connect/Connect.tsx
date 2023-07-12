'use client';
import { FC } from 'react';
import {
  useGetAllUserQuery,
  useAddFollowerMutation,
} from '@/globalRedux/service/userApi';
import {
  ConnectContainer,
  Connect,
  CustomAvatar,
  TextInfoWrapper,
  ConnectButton,
} from './style';

const ConnectTemplate: FC = () => {
  const { data, isLoading } = useGetAllUserQuery();
  if (isLoading) return <p>Loading...</p>;

  const otherUsers = data!;
  return (
    <ConnectContainer>
      {otherUsers.map((user) => (
        <Connect key={user._id}>
          <CustomAvatar src={user.avatar?.thumbnail} alt={user.first_name} />
          <TextInfoWrapper>
            <div>
              <span>{user.first_name}</span>
              <span>{user.last_name}</span>
            </div>
            <p>{user.about_me}</p>
          </TextInfoWrapper>

          <ConnectButton>Connect</ConnectButton>
        </Connect>
      ))}
    </ConnectContainer>
  );
};

export default ConnectTemplate;
