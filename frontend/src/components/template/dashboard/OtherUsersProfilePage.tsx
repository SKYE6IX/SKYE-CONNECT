'use client';
import { FC } from 'react';
import { useGetSingleUserQuery } from '@/globalRedux/service/userApi';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import OtherUsersDashboardheader from '@/components/oraganims/dashboard-header/OtherUsersDashboardHeader';
import OtherUsersDashboardPostList from '@/components/oraganims/dashboard-post-list/OtherUsersDashboardPostList';
import PhotoGalleryCard from '@/components/oraganims/photo-gallery/PhotoGalleryCard';
import GroupCard from '@/components/oraganims/group-card/GroupCard';
import OtherUsersFollowerCard from '@/components/oraganims/followers-card/OtherUsersFollowerCard';
import {
  DashboardTemplateContainer,
  InnerWrapper,
  DashboardTemplateBodyWrapper,
  DashboardTemplateMain,
  DashboardTemplateAside,
  AsideContentWrapper,
} from './style';
import { useFixedScroll } from './helper';

type OtherUsersProfilePageProps = {
  user_id: string;
};

const OtherUsersProfilePage: FC<OtherUsersProfilePageProps> = ({ user_id }) => {
  const { isFixed } = useFixedScroll();
  const { data: authUser, refetch } = useGetUserQuery();
  const { data, isLoading } = useGetSingleUserQuery(user_id);
  if (isLoading) return <p>Loading...</p>;
  const otherUserData = data!;

  const handleRefetch = () => {
    refetch();
  };

  //FILTER OUT AUTH USER FROM THE OTHER USER FOLLOWER CARD
  const filterFollowers = otherUserData.followers.filter(
    (follower) => follower._id !== authUser?._id
  );

  return (
    <DashboardTemplateContainer>
      <InnerWrapper id="fixed_container">
        <OtherUsersDashboardheader
          other_user={otherUserData}
          authUser={authUser}
          handleReftch={handleRefetch}
        />
        <DashboardTemplateBodyWrapper>
          <DashboardTemplateMain>
            <PhotoGalleryCard />
            <OtherUsersDashboardPostList
              user_posts={otherUserData.posts}
              liked_posts={otherUserData.likePosts}
            />
          </DashboardTemplateMain>
          <DashboardTemplateAside>
            <AsideContentWrapper $is_fixed={isFixed}>
              <OtherUsersFollowerCard
                followers={filterFollowers}
                authUser={authUser}
              />
              <GroupCard />
            </AsideContentWrapper>
          </DashboardTemplateAside>
        </DashboardTemplateBodyWrapper>
      </InnerWrapper>
    </DashboardTemplateContainer>
  );
};

export default OtherUsersProfilePage;
