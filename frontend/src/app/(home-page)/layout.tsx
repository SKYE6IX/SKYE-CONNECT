import React from 'react';
import RootLayout from '../RootLayout';
import HomeLayout from './home-layout/HomeLayout';

const HomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <RootLayout>
      <HomeLayout>{children}</HomeLayout>
    </RootLayout>
  );
};

export default HomepageLayout;
