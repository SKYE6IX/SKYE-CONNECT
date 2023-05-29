'use client';
import { FC } from 'react';
import styled from 'styled-components';
import Navigation, {
  NavigationProps,
} from '@/components/molecules/navigation/Navigation';

export const Main = styled.main`
  height: 100vh;
`;
export const FeedsNavigation: FC<NavigationProps> = styled(Navigation)`
  height: 7vh;
  display: flex;
  align-items: center;
  padding: 0 0.8em;
  span {
    color: black;
  }
  button {
    margin-left: auto;
  }
`;
