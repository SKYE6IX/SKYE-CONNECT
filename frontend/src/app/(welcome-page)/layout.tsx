import React from 'react';
import RootLayout from '../RootLayout';

const WelcomepageLayout = ({ children }: { children: React.ReactNode }) => {
  return <RootLayout>{children}</RootLayout>;
};

export default WelcomepageLayout;
