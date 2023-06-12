import React from 'react';
import RootLayout from '../RootLayout';
const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default DashboardLayout;
