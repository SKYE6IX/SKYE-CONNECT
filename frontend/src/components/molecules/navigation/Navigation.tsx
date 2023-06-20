import React, { FC, HTMLAttributes } from 'react';
import NavigationContainer from './style';
import Link from 'next/link';
export type NavigationProps = HTMLAttributes<HTMLDivElement>;

const Navigation: FC<NavigationProps> = ({ className, children }) => {
  return (
    <NavigationContainer className={className}>
      <Link href="/feeds">
        <span>SKYE-CONNECT</span>
      </Link>
      {children}
    </NavigationContainer>
  );
};
export default Navigation;
