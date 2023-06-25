import React from 'react';
import { DashboardNavigation } from './style';
import SignOut from '@/components/molecules/sign-out/SignOut';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavigation>
        <SignOut />
      </DashboardNavigation>
      {children}
    </>
  );
};

export default DashboardLayout;
