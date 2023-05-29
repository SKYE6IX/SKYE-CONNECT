'use client';
import { FC } from 'react';
import { useAppSelector } from '@/hooks/appStateHooks';
import { selectUser } from '@/service/slice/authSlice';
import { FeedsContainer, FeedsMain, FeedsAsides } from './style';
import PostsTemplate from '@/components/template/posts/PostsTemplate';
import ProfileCard from '@/components/oraganims/profile-card/ProfileCard';
import FollowerCard from '@/components/oraganims/follower-card/FollowerCard';
import FollowerSuggestionCard from '@/components/oraganims/follower-suggestion-card/FollowerSuggestionCard';

const FeedsPage: FC = () => {
  const user = useAppSelector(selectUser);
  return (
    <FeedsContainer>
      <FeedsAsides>
        <ProfileCard user={user} />
      </FeedsAsides>
      <FeedsMain>
        <PostsTemplate />
      </FeedsMain>
      <FeedsAsides>
        <FollowerCard user={user} />
        <FollowerSuggestionCard user={user} />
      </FeedsAsides>
    </FeedsContainer>
  );
};

export default FeedsPage;
