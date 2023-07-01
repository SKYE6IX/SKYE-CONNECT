'use client';
import React from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import SignOut from '@/components/molecules/sign-out/SignOut';
import SidebarProfileCard from '@/components/oraganims/sidebar-profile-card/SidebarProfileCard';
import ConnectionCard from '@/components/oraganims/connection-card/ConnectionCard';
import ConneectionSuggestionCard from '@/components/oraganims/connection-suggestion-card/ConnectionSuggestionCard';
import ChatOpener from '@/components/oraganims/chat/chat-opener/ChatOpener';
import {
  Container,
  MainNavigation,
  MainContainer,
  Main,
  MainAsides,
} from './style';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, refetch } = useGetUserQuery();

  const handleRefetchUser = () => {
    refetch();
  };

  return (
    <Container>
      <MainNavigation>
        <SignOut />
      </MainNavigation>
      <MainContainer>
        <MainAsides>
          <SidebarProfileCard user={data} isUserDataLoading={isLoading} />
          <ChatOpener handleRefetchUser={handleRefetchUser} />
        </MainAsides>
        <Main>{children}</Main>
        <MainAsides>
          <ConnectionCard user={data} isUserDataLoading={isLoading} />
          <ConneectionSuggestionCard
            user={data}
            isUserDataLoading={isLoading}
          />
        </MainAsides>
      </MainContainer>
    </Container>
  );
};
export default MainLayout;
