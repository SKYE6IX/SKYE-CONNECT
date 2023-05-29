import React, { FC } from 'react';
import { Main, FeedsNavigation } from './style';
import SignOut from '@/components/molecules/sign-out/SignOut';
type FeedsLayoutProps = {
  children: React.ReactNode;
};

const FeedsLayout: FC<FeedsLayoutProps> = ({ children }) => {
  return (
    <Main>
      <FeedsNavigation>
        <SignOut />
      </FeedsNavigation>
      {children}
    </Main>
  );
};

export default FeedsLayout;
