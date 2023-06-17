import React from 'react';
import { redirect } from 'next/navigation';
import RootLayout from '../RootLayout';
import HomeLayout from './home-layout/HomeLayout';
import { isAuthenticated } from '../authentication/isAuthenticated';

const HomepageLayout = async ({ children }: { children: React.ReactNode }) => {
  const authUser = await isAuthenticated();
  if (!authUser) {
    redirect('/');
  }
  return (
    <RootLayout>
      <HomeLayout>{children}</HomeLayout>
    </RootLayout>
  );
};
export default HomepageLayout;
