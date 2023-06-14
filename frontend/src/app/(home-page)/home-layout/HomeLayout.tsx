'use client';
import React from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import SignOut from '@/components/molecules/sign-out/SignOut';
import SidebarProfileCard from '@/components/oraganims/sidebar-profile-card/ProfileCard';
import ConnectionCard from '@/components/oraganims/connection-card/ConnectionCard';
import ConneectionSuggestionCard from '@/components/oraganims/connection-suggestion-card/ConnectionSuggestionCard';
import ChatOpener from '@/components/oraganims/chat/chat-opener/ChatOpener';
import {
  Main,
  HomeNavigation,
  HomeContainer,
  HomeMain,
  HomeAsides,
} from './style';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading } = useGetUserQuery();
  return (
    <Main>
      <HomeNavigation>
        <SignOut />
      </HomeNavigation>
      <HomeContainer>
        <HomeAsides>
          <SidebarProfileCard user={data} isUserDataLoading={isLoading} />
          <ChatOpener />
        </HomeAsides>
        <HomeMain>{children}</HomeMain>
        <HomeAsides>
          <ConnectionCard user={data} isUserDataLoading={isLoading} />
          <ConneectionSuggestionCard
            user={data}
            isUserDataLoading={isLoading}
          />
        </HomeAsides>
      </HomeContainer>
    </Main>
  );
};
export default HomeLayout;
