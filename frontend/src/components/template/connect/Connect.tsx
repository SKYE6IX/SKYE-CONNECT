'use client';
import { FC } from 'react';
import Link from 'next/link';
import {
  useGetAllUserQuery,
  useGetUserQuery,
  useAddFollowerMutation,
} from '@/globalRedux/service/userApi';
import Loading from './Loading';
import {
  ConnectContainer,
  Connect,
  CustomAvatar,
  TextInfoWrapper,
  ConnectButton,
} from './style';
import type { User } from '@/types/user';

const ConnectTemplate: FC = () => {
  const { data: authUser } = useGetUserQuery();
  const { data, isLoading } = useGetAllUserQuery();
  const [addFollower, { isLoading: isAddFollowerLoading }] =
    useAddFollowerMutation();
  const otherUsers = data!;

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

  if (isLoading) return <Loading />;
  return (
    <ConnectContainer>
      {otherUsers.map((user) => (
        <Connect key={user._id}>
          <Link href={`/${user._id}`}>
            <CustomAvatar src={user.avatar?.thumbnail} alt={user.first_name} />
          </Link>
          <TextInfoWrapper>
            <div>
              <span>{user.first_name}</span>
              <span>{user.last_name}</span>
            </div>
            <p>{user.about_me}</p>
          </TextInfoWrapper>
          {isFollowerExist(authUser, user._id) ? (
            <ConnectButton disabled>Connected</ConnectButton>
          ) : (
            <ConnectButton
              onClick={() => handleClick(user._id)}
              disabled={isAddFollowerLoading}
            >
              Connect
            </ConnectButton>
          )}
        </Connect>
      ))}
    </ConnectContainer>
  );
};
export default ConnectTemplate;
