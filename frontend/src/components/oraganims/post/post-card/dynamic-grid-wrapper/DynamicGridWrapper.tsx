'use client';
import { FC } from 'react';
import type { IPhoto } from '@/types/post';
import {
  DefaultWrapper,
  TwoGridPhotos,
  ThreeGridPhotos,
  FourGridPhotos,
  FiveGridPhotos,
  SixGridPhotos,
} from './style';

type DyanamicGridWrapperProps = {
  photosLength: number;
  photos: IPhoto[];
};

const DyanamicGridWrapper: FC<DyanamicGridWrapperProps> = ({
  photos,
  photosLength,
}) => {
  switch (photosLength) {
    case 6:
      return (
        <SixGridPhotos>
          {photos.map((photo) => (
            <img src={photo.url} alt={photo.filename} key={photo._id} />
          ))}
        </SixGridPhotos>
      );
    case 5:
      return (
        <FiveGridPhotos>
          {photos.map((photo) => (
            <img src={photo.url} alt={photo.filename} key={photo._id} />
          ))}
        </FiveGridPhotos>
      );
    case 4:
      return (
        <FourGridPhotos>
          {photos.map((photo) => (
            <img src={photo.url} alt={photo.filename} key={photo._id} />
          ))}
        </FourGridPhotos>
      );
    case 3:
      return (
        <ThreeGridPhotos>
          {photos.map((photo) => (
            <img src={photo.url} alt={photo.filename} key={photo._id} />
          ))}
        </ThreeGridPhotos>
      );
    case 2:
      return (
        <TwoGridPhotos>
          {photos.map((photo) => (
            <img src={photo.url} alt={photo.filename} key={photo._id} />
          ))}
        </TwoGridPhotos>
      );
    default:
      return (
        <DefaultWrapper>
          {photos.map((photo) => (
            <img src={photo.url} alt={photo.filename} key={photo._id} />
          ))}
        </DefaultWrapper>
      );
  }
};
export default DyanamicGridWrapper;
