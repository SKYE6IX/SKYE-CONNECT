'use client';
import Skeleton from '@mui/material/Skeleton';
import {
  ConnectionsListContainer,
  Connection,
  TextInfoWrapper,
  BottonWrapper,
} from './style';

const Loading = () => {
  return (
    <ConnectionsListContainer>
      {Array.from(new Array(7)).map((item, index) => (
        <Connection key={index}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={65}
            height={65}
          />
          <TextInfoWrapper>
            <Skeleton variant="rectangular" width={70} height={10} />
            <Skeleton variant="rectangular" width={200} height={20} />
          </TextInfoWrapper>
          <BottonWrapper>
            <Skeleton variant="rounded" width={70} height={20} />
            <Skeleton variant="rounded" width={70} height={20} />
          </BottonWrapper>
        </Connection>
      ))}
    </ConnectionsListContainer>
  );
};

export default Loading;
