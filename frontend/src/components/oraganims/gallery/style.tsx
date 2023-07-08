'use client';
import styled from 'styled-components';

export const GalleryCardContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const GalleryPhotosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 32%);
  gap: 2%;
`;

export const GridItem = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1em;
    transition: transform 2s;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const NoPostsWithPhotosMessage = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  svg {
    width: 100px;
    height: 100px;
  }
  span {
    font-size: 0.9rem;
    font-weight: 300;
  }
`;

export const GalleryCardButtonWrapper = styled.div`
  margin-top: auto;
  align-self: center;
  display: flex;
  gap: 1em;
`;

export const GalleryCardButton = styled.button`
  border: none;
  width: 200px;
  padding: 0.6em;
  border-radius: 1em;
  cursor: pointer;
`;
