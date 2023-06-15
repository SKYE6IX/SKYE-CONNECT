import { FC } from 'react';
import {
  DashboardHeaderContainer,
  DashboardHeaderCoverImageWrapper,
} from './style';
import ProfileCard from '@/components/molecules/profile/profile-card/ProfileCard';
import type { User } from '@/types/user';

type DashboardHeaderProps = {
  user: User | undefined;
};

const DashboardHeader: FC<DashboardHeaderProps> = ({ user }) => {
  return (
    <DashboardHeaderContainer>
      <DashboardHeaderCoverImageWrapper>
        <img src="" alt="" />
        <div>
          <button>Change Cover</button>
        </div>
      </DashboardHeaderCoverImageWrapper>
      <ProfileCard user={user} />
    </DashboardHeaderContainer>
  );
};
export default DashboardHeader;
