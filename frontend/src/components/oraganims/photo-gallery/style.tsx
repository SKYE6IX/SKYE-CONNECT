'use client';
import styled from 'styled-components';

export const PhotoGalleryCardContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 1rem;
  border-radius: 1rem;
`;

export const GalleryPhotosList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 100px);
  gap: 2rem;
  div {
    width: 100px;
    height: 100px;
    background-color: red;
  }
`;
