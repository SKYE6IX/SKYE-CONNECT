'use client';
import { FC } from 'react';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import DashboardHeader from '@/components/oraganims/dashboard-header/DashboardHeader';
import FollowersCard from '@/components/oraganims/followers-card/FollowersCard';
import PhotoGalleryCard from '@/components/oraganims/photo-gallery/PhotoGalleryCard';
import GroupCard from '@/components/oraganims/group-card/GroupCard';
import DashboardPostList from '@/components/oraganims/dashboard-post-list/DashboardPostList';
import {
  DashboardTemplateContainer,
  InnerWrapper,
  DashboardTemplateBodyWrapper,
  DashboardTemplateMain,
  DashboardTemplateAside,
} from './style';

const DashboardTemplate: FC = () => {
  const { data } = useGetUserQuery();
  return (
    <DashboardTemplateContainer>
      <InnerWrapper>
        <DashboardHeader user={data} />
        <DashboardTemplateBodyWrapper>
          <DashboardTemplateMain>
            <PhotoGalleryCard />
            <DashboardPostList />
          </DashboardTemplateMain>
          <DashboardTemplateAside>
            <FollowersCard />
            <GroupCard />
          </DashboardTemplateAside>
        </DashboardTemplateBodyWrapper>
      </InnerWrapper>
    </DashboardTemplateContainer>
  );
};

export default DashboardTemplate;