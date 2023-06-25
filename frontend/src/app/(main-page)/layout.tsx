import React from 'react';
import { redirect } from 'next/navigation';

import MainLayout from './main-layout/MainLayout';
import { isAuthenticated } from '../authentication/isAuthenticated';

const MainpageLayout = async ({ children }: { children: React.ReactNode }) => {
  const authUser = await isAuthenticated();
  if (!authUser) {
    redirect('/');
  }
  return <MainLayout>{children}</MainLayout>;
};
export default MainpageLayout;
