'use client';
import { FC } from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import { FeedsContainer, FeedsMain, FeedsAsides } from './style';
import PostsTemplate from '@/components/template/posts/PostsTemplate';
import ProfileCard from '@/components/oraganims/profile-card/ProfileCard';
import ConnectionCard from '@/components/oraganims/connection-card/ConnectionCard';
import FollowerSuggestionCard from '@/components/oraganims/connection-suggestion-card/ConnectionSuggestionCard';
import ChatOpener from '@/components/oraganims/chat/chatOpener/ChatOpener';

const FeedsPage: FC = () => {
  const { data, isLoading } = useGetUserQuery();
  return (
    <FeedsContainer>
      <FeedsAsides>
        <ProfileCard user={data} isUserDataLoading={isLoading} />
        <ChatOpener />
      </FeedsAsides>
      <FeedsMain>
        <PostsTemplate />
      </FeedsMain>
      <FeedsAsides>
        <ConnectionCard user={data} isUserDataLoading={isLoading} />
        <FollowerSuggestionCard user={data} isUserDataLoading={isLoading} />
      </FeedsAsides>
    </FeedsContainer>
  );
};

export default FeedsPage;
