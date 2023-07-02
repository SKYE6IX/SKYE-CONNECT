import React from 'react';
import { redirect } from 'next/navigation';
import { isAuthenticated } from '../authentication/isAuthenticated';
import NavMenu from '@/components/molecules/nav-menu/NavMenu';
import SignOut from '@/components/molecules/sign-out/SignOut';
import { PagesNavigation } from './layoutStyle';

const PagesLayout = async ({ children }: { children: React.ReactNode }) => {
  const authUser = await isAuthenticated();
  if (!authUser) {
    redirect('/');
  }
  return (
    <>
      <PagesNavigation>
        <NavMenu />
        <SignOut />
      </PagesNavigation>
      {children}
    </>
  );
};

export default PagesLayout;
