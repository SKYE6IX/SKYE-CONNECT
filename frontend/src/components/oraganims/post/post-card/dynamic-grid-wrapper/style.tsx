'use client';
import styled from 'styled-components';

interface Props {
  orientation: string;
}

const SharedStyles = styled.div`
  max-height: 450px;
  max-width: 500px;
  display: grid;
  gap: 2%;
  img {
    border-radius: 1em;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 40%;
  }
`;

export const DefaultWrapper = styled(SharedStyles)<Props>`
  max-width: ${({ orientation }) =>
    orientation === 'landscape' ? '500px' : '300px'};
`;

export const TwoGridPhotos = styled(SharedStyles)`
  grid-template-columns: repeat(2, 49%);
`;

export const ThreeGridPhotos = styled(SharedStyles)`
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

export const FourGridPhotos = styled(SharedStyles)`
  grid-template-columns: repeat(2, 49%);
  grid-template-rows: repeat(2, 49%);
`;

export const FiveGridPhotos = styled(SharedStyles)`
  grid-template-columns: repeat(3, [col] 32.6%);
  grid-template-rows: repeat(2, [row] 49%);
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

export const SixGridPhotos = styled(SharedStyles)`
  grid-template-columns: repeat(3, 32.6%);
  grid-template-rows: repeat(2, 49%);
`;
