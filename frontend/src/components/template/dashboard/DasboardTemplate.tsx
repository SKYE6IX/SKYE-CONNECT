'use client';
import { FC } from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import DashboardHeader from '@/components/oraganims/dashboard-header/DashboardHeader';
import FollowersCard from '@/components/oraganims/followers-card/FollowersCard';
import PhotoGalleryCard from '@/components/oraganims/photo-gallery/PhotoGalleryCard';
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
  const { data, refetch } = useGetUserQuery();

  const handleRefetchUser = () => {
    refetch();
  };
  return (
    <DashboardTemplateContainer>
      <InnerWrapper id="fixed_container">
        <DashboardHeader user={data} handleRefetchUser={handleRefetchUser} />
        <DashboardTemplateBodyWrapper>
          <DashboardTemplateMain>
            <PhotoGalleryCard />
            <DashboardPostList
              user_posts={data?.posts}
              liked_posts={data?.likePosts}
            />
          </DashboardTemplateMain>
          <DashboardTemplateAside>
            <AsideContentWrapper $is_fixed={isFixed}>
              <FollowersCard followers={data?.followers} />
              <GroupCard />
            </AsideContentWrapper>
          </DashboardTemplateAside>
        </DashboardTemplateBodyWrapper>
      </InnerWrapper>
    </DashboardTemplateContainer>
  );
};

export default DashboardTemplate;
