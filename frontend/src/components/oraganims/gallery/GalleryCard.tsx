import { FC } from 'react';
import HideImageIcon from '@mui/icons-material/HideImage';
import {
  GalleryCardContainer,
  GalleryPhotosGrid,
  GridItem,
  NoPostsWithPhotosMessage,
  GalleryCardButtonWrapper,
  GalleryCardButton,
} from './style';
import type { IPost, IPhoto } from '@/types/post';

type GalleryCardProps = {
  isUserDataLoading: boolean;
  postsWithPhoto: IPost[];
};

const GalleryCard: FC<GalleryCardProps> = ({
  isUserDataLoading,
  postsWithPhoto,
}) => {
  const getFirstSixPhotos = () => {
    const firstSixPhotos: IPhoto[] = [];
    if (firstSixPhotos.length <= 6) {
      postsWithPhoto?.forEach((post) => {
        post.photos.forEach((photo) => {
          firstSixPhotos.push(photo);
        });
      });
    }
    return firstSixPhotos;
  };

  return (
    <GalleryCardContainer>
      <h4>Photos</h4>

      {!postsWithPhoto?.length && (
        <NoPostsWithPhotosMessage>
          <HideImageIcon />
          <span>No photos uploaded yet...</span>
        </NoPostsWithPhotosMessage>
      )}

      <GalleryPhotosGrid>
        {getFirstSixPhotos().map((photo) => (
          <GridItem key={photo._id}>
            <img src={photo.url} alt={photo.filename} />
          </GridItem>
        ))}
      </GalleryPhotosGrid>

      <GalleryCardButtonWrapper>
        <GalleryCardButton>Upload Photo</GalleryCardButton>
        <GalleryCardButton>Show All</GalleryCardButton>
      </GalleryCardButtonWrapper>
    </GalleryCardContainer>
  );
};

export default GalleryCard;
