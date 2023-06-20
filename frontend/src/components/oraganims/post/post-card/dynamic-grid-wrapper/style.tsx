'use client';
import styled from 'styled-components';

export const DefaultWrapper = styled.div`
  max-height: 450px;
  max-width: 500px;
  display: grid;
  gap: 1em;
  img {
    border-radius: 1em;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 40%;
  }
`;

export const TwoGridPhotos = styled(DefaultWrapper)`
  grid-template-columns: repeat(2, 48%);
`;

export const ThreeGridPhotos = styled(DefaultWrapper)`
  grid-template: 49% 49% / 49% 49%;
  grid-template-areas: 'L T' 'L B';
  img {
    &:nth-child(1) {
      grid-area: L;
    }
    &:nth-child(2) {
      grid-area: T;
    }
    &:nth-child(3) {
      grid-area: B;
    }
  }
`;

export const FourGridPhotos = styled(DefaultWrapper)`
  grid-template-columns: repeat(2, 48%);
  grid-template-rows: repeat(2, 48%);
`;

export const FiveGridPhotos = styled(DefaultWrapper)`
  grid-template-columns: repeat(3, [col] 32%);
  grid-template-rows: repeat(2, [row] 48%);
  img {
    &:nth-child(1) {
      grid-column: col / span 1;
      grid-row: row;
    }
    &:nth-child(2) {
      grid-column: col 2 / span 2;
      grid-row: row;
    }
  }
`;

export const SixGridPhotos = styled(DefaultWrapper)`
  grid-template-columns: repeat(3, 32%);
  grid-template-rows: repeat(2, 48%);
`;
