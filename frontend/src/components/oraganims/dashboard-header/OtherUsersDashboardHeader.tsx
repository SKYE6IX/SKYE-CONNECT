import { FC } from 'react';
import {
  DashboardHeaderContainer,
  DashboardHeaderCoverImageWrapper,
} from './style';
import OtherUsersProfileCard from '@/components/molecules/profile/profile-card/OtherUsersProfileCard';
import type { User } from '@/types/user';

type OtherUsersDashboardheaderProps = {
  other_user: User;
  authUser: User | undefined;
  handleReftch: () => void;
};

const OtherUsersDashboardheader: FC<OtherUsersDashboardheaderProps> = ({
  other_user,
  authUser,
  handleReftch,
}) => {
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderCoverImageWrapper
        header_cover_url={other_user?.header_cover?.url}
      ></DashboardHeaderCoverImageWrapper>
      <OtherUsersProfileCard
        other_user={other_user}
        authUser={authUser}
        handleReftch={handleReftch}
      />
    </DashboardHeaderContainer>
  );
};
export default OtherUsersDashboardheader;
