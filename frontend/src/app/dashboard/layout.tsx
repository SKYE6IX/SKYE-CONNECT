import React from 'react';
import RootLayout from '../RootLayout';
import { DashboardNavigation } from './style';
import SignOut from '@/components/molecules/sign-out/SignOut';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <DashboardNavigation>
        <SignOut />
      </DashboardNavigation>
      {children}
    </RootLayout>
  );
};

export default DashboardLayout;
