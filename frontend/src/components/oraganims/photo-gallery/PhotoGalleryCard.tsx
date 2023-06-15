import { FC } from 'react';
import { PhotoGalleryCardContainer, GalleryPhotosList } from './style';

const PhotoGalleryCard: FC = () => {
  return (
    <PhotoGalleryCardContainer>
      <h4>Photo</h4>
      <GalleryPhotosList>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </GalleryPhotosList>
    </PhotoGalleryCardContainer>
  );
};

export default PhotoGalleryCard;
