'use client';
import { FC, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  CaroselContainer,
  InnerContainer,
  CaroselItem,
  CaroselLeftButtton,
  CaroselRightButtton,
} from './style';
import type { IPhoto } from '@/types/post';

type CarouselProps = {
  photos: IPhoto[];
};

const Carousel: FC<CarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === photos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <CaroselContainer photos_lenght={photos.length}>
      {photos.length > 1 && (
        <>
          <CaroselLeftButtton onClick={goToPrevious}>
            <ArrowBackIosNewIcon />
          </CaroselLeftButtton>
          <CaroselRightButtton onClick={goToNext}>
            <ArrowForwardIosIcon />
          </CaroselRightButtton>
        </>
      )}
      <div>
        <InnerContainer
          current_index={currentIndex}
          photos_length={photos.length}
        >
          {photos.map((photo) => (
            <CaroselItem key={photo._id}>
              <img src={photo.url} alt={photo.filename} />
            </CaroselItem>
          ))}
        </InnerContainer>
      </div>
    </CaroselContainer>
  );
};
export default Carousel;
