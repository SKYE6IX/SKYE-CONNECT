'use client';
import { FC } from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import DashboardHeader from '@/components/oraganims/dashboard-header/DashboardHeader';
import FollowersCard from '@/components/oraganims/followers-card/FollowersCard';
import GalleryCard from '@/components/oraganims/gallery/GalleryCard';
import GroupCard from '@/components/oraganims/group-card/GroupCard';
import DashboardPostList from '@/components/oraganims/dashboard-post-list/DashboardPostList';
import { useFixedScroll } from './helper';
import {
  DashboardTemplateContainer,
  InnerWrapper,
  DashboardTemplateBodyWrapper,
  DashboardTemplateMain,
  DashboardTemplateAside,
  AsideContentWrapper,
} from './style';

const DashboardTemplate: FC = () => {
  const { isFixed } = useFixedScroll();
  const { data, refetch, isLoading } = useGetUserQuery();
  const userData = data!;

  const handleRefetchUser = () => {
    refetch();
  };
  const userPostsWithPhotos = userData?.posts.filter((post) => {
    return post.photos.length;
  });

  return (
    <DashboardTemplateContainer>
      <InnerWrapper id="fixed_container">
        <DashboardHeader
          user={userData}
          handleRefetchUser={handleRefetchUser}
          isUserDataLoading={isLoading}
        />
        <DashboardTemplateBodyWrapper>
          <DashboardTemplateMain>
            <GalleryCard
              isUserDataLoading={isLoading}
              postsWithPhoto={userPostsWithPhotos}
            />
            <DashboardPostList
              user_posts={userData?.posts}
              liked_posts={userData?.likePosts}
            />
          </DashboardTemplateMain>
          <DashboardTemplateAside>
            <AsideContentWrapper $is_fixed={isFixed}>
              <FollowersCard followers={userData?.followers} />
              <GroupCard />
            </AsideContentWrapper>
          </DashboardTemplateAside>
        </DashboardTemplateBodyWrapper>
      </InnerWrapper>
    </DashboardTemplateContainer>
  );
};

export default DashboardTemplate;
