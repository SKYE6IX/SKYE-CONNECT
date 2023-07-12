import { FC } from 'react';
import Link from 'next/link';
import Loading from './Loading';
import {
  SidebarProfileCardContainer,
  SidebarProfileCardAvatar,
  SidebarProfileCardName,
  SidebarProfileCardAboutMe,
  SidebarProfileCardInfoContainer,
  SidebarProfileCardInfo,
} from './style';
import type { CardsProps } from '@/types/user';

type SidebarProfileCardProps = CardsProps;

const SidebarProfileCard: FC<SidebarProfileCardProps> = ({
  user,
  isUserDataLoading,
}) => {
  return (
    <SidebarProfileCardContainer>
      {isUserDataLoading ? (
        <Loading />
      ) : (
        <>
          <Link href={`/dashboard/${user?.username}`}>
            <SidebarProfileCardAvatar
              src={user?.avatar?.thumbnail}
              alt={user?.first_name}
            />
          </Link>
          <SidebarProfileCardName>
            <span>{user?.first_name}</span>
            <span>{user?.last_name}</span>
          </SidebarProfileCardName>
          <SidebarProfileCardAboutMe>
            {user?.about_me}
          </SidebarProfileCardAboutMe>
          <SidebarProfileCardInfoContainer>
            <SidebarProfileCardInfo>
              <h5>Follower</h5>
              <span>{user?.followers?.length}</span>
            </SidebarProfileCardInfo>
            <SidebarProfileCardInfo>
              <h5>Posts</h5>
              <span>{user?.posts?.length}</span>
            </SidebarProfileCardInfo>
          </SidebarProfileCardInfoContainer>
        </>
      )}
    </SidebarProfileCardContainer>
  );
};

export default SidebarProfileCard;
