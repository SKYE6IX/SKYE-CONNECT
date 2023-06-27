import React from 'react';
import { ProfilePageNavigation } from './style';
import SignOut from '@/components/molecules/sign-out/SignOut';

const ProfilePageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProfilePageNavigation>
        <SignOut />
      </ProfilePageNavigation>
      {children}
    </>
  );
};

export default ProfilePageLayout;
