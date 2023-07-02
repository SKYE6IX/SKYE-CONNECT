import React from 'react';
import MainLayout from './main-page-layout/MainPageLayout';

const MainpageLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};
export default MainpageLayout;
