import React, { FC, HTMLAttributes } from 'react';
import { NavigationContainer } from './style';
import Logo from './Logo';
export type NavigationProps = HTMLAttributes<HTMLDivElement>;
const Navigation: FC<NavigationProps> = ({ className, children }) => {
  return (
    <NavigationContainer className={className}>
      <Logo />
      {children}
    </NavigationContainer>
  );
};
export default Navigation;
