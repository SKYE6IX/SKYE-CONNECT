'use client';
import { FC } from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import { FeedsContainer, FeedsMain, FeedsAsides } from './style';
import PostsTemplate from '@/components/template/posts/PostsTemplate';
import ProfileCard from '@/components/oraganims/profile-card/ProfileCard';
import FollowerCard from '@/components/oraganims/follower-card/FollowerCard';
import FollowerSuggestionCard from '@/components/oraganims/follower-suggestion-card/FollowerSuggestionCard';

const FeedsPage: FC = () => {
  const { data, isLoading } = useGetUserQuery();
  return (
    <FeedsContainer>
      <FeedsAsides>
        <ProfileCard user={data} isUserDataLoading={isLoading} />
      </FeedsAsides>
      <FeedsMain>
        <PostsTemplate />
      </FeedsMain>
      <FeedsAsides>
        <FollowerCard user={data} isUserDataLoading={isLoading} />
        <FollowerSuggestionCard user={data} isUserDataLoading={isLoading} />
      </FeedsAsides>
    </FeedsContainer>
  );
};

export default FeedsPage;
