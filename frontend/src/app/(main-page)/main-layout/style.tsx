'use client';
import { FC } from 'react';
import styled from 'styled-components';
import Navigation, {
  NavigationProps,
} from '@/components/molecules/navigation/Navigation';

export const Container = styled.main`
  height: 100vh;
`;
export const MainNavigation: FC<NavigationProps> = styled(Navigation)`
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
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  grid-gap: 10px;
  background-color: #eaeaea;
  height: 93vh;
  padding: 10px 20px;
`;

export const Main = styled.div`
  padding: 20px 20px;
  background-color: white;
  border-radius: 10px;
  overflow-x: scroll;
`;
export const MainAsides = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 20px 60px;
  background-color: white;
  border-radius: 10px;
`;
