'use client';
import { FC } from 'react';
import Link from 'next/link';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import {
  ConnectionsListContainer,
  Connection,
  CustomAvatar,
  TextInfoWrapper,
  BottonWrapper,
  ConnectionButton,
} from './style';

const ConnectionsList: FC = () => {
  const { data, isLoading } = useGetUserQuery();
  if (isLoading) return <p>Loading..</p>;
  const connections = data?.following!;
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
            <ConnectionButton>Message</ConnectionButton>
            <ConnectionButton>Disconnect</ConnectionButton>
          </BottonWrapper>
        </Connection>
      ))}
    </ConnectionsListContainer>
  );
};

export default ConnectionsList;
