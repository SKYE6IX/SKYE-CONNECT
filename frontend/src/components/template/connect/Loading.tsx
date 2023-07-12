'use client';
import Skeleton from '@mui/material/Skeleton';
import { ConnectContainer, Connect, TextInfoWrapper } from './style';

const Loading = () => {
  return (
    <ConnectContainer>
      {Array.from(new Array(9)).map((item, index) => (
        <Connect key={index}>
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
          <div
            style={{
              marginLeft: 'auto',
            }}
          >
            <Skeleton variant="rounded" width={70} height={20} />
          </div>
        </Connect>
      ))}
    </ConnectContainer>
  );
};

export default Loading;
