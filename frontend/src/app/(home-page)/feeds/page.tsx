import React from 'react';
import { redirect } from 'next/navigation';
import FeedsPage from '@/components/pages/feeds/FeedsPage';
import { isAuthenticated } from '../../authentication/isAuthenticated';

const Page = async () => {
  const authUser = await isAuthenticated();
  if (!authUser) {
    redirect('/');
  }
  return <FeedsPage />;
};
export default Page;
