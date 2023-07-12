'use client';
import Skeleton from '@mui/material/Skeleton';
import { SidebarProfileCardInfoContainer } from './style';
const Loading = () => {
  return (
    <>
      <Skeleton variant="circular" width={80} height={80} />
      <Skeleton variant="rectangular" width={100} height={15} />
      <Skeleton variant="rectangular" width={160} height={50} />
      <SidebarProfileCardInfoContainer>
        <Skeleton variant="rectangular" width={20} height={15} />
        <Skeleton variant="rectangular" width={20} height={15} />
      </SidebarProfileCardInfoContainer>
    </>
  );
};

export default Loading;
