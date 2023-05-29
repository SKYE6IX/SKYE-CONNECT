'use client';
import React from 'react';
import styled from 'styled-components';
import Navigation, {
  NavigationProps,
} from '@/components/molecules/navigation/Navigation';
const HomeContainer = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)),
    url('https://res.cloudinary.com/skyecamp/image/upload/q_30/v1677059015/SKYE-CONNECTv2/helena-lopes-PGnqT0rXWLs-unsplash_zboyy0.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  padding: 1em;
`;
const HomeNavigation: React.FC<NavigationProps> = styled(Navigation)``;

export { HomeContainer, HomeNavigation };
