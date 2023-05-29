import React, { FC, HTMLAttributes } from 'react';
import NavigationContainer from './style';
export type NavigationProps = HTMLAttributes<HTMLDivElement>;

const Navigation: FC<NavigationProps> = ({ className, children }) => {
  return (
    <NavigationContainer className={className}>
      <span>SKYE-CONNECT</span>
      {children}
    </NavigationContainer>
  );
};
export default Navigation;
