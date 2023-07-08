'use client';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
from{
transform:scaleX(1.25);
}
to{
transform:translateY(-40px)scaleX(1);
}
`;

export const LoadingContainer = styled.div`
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingInnerContainer = styled.div`
  display: inline-block;
`;

export const LoadingItem = styled.span`
  display: inline-block;
  width: 25px;
  height: 25px;
  background-color: #b2b2b2;
  margin-inline: 5px;
  border-radius: 50%;
  animation: ${bounce} 450ms alternate infinite;
  &:nth-child(2) {
    animation-delay: 150ms;
  }
  &:nth-child(3) {
    animation-delay: 300ms;
  }
`;
