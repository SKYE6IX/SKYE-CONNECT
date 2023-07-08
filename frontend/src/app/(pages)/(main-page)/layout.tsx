import React from 'react';
import MainPages from '@/components/pages/main-pages/MainPages';

const MainpageLayout = ({ children }: { children: React.ReactNode }) => {
  return <MainPages>{children}</MainPages>;
};
export default MainpageLayout;
