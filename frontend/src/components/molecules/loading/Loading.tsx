'use client';
import { FC } from 'react';
import { LoadingContainer, LoadingInnerContainer, LoadingItem } from './style';

const Loading: FC = () => {
  return (
    <LoadingContainer>
      <LoadingInnerContainer>
        <LoadingItem></LoadingItem>
        <LoadingItem></LoadingItem>
        <LoadingItem></LoadingItem>
      </LoadingInnerContainer>
    </LoadingContainer>
  );
};

export default Loading;
