import { FC } from 'react';
import Link from 'next/link';
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

const SidebarProfileCard: FC<SidebarProfileCardProps> = ({ user }) => {
  return (
    <SidebarProfileCardContainer>
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
      <SidebarProfileCardAboutMe>{user?.about_me}</SidebarProfileCardAboutMe>
      <SidebarProfileCardInfoContainer>
        <SidebarProfileCardInfo>
          <h5>Follower</h5>
          <span>{user?.followers?.length}</span>
        </SidebarProfileCardInfo>
        <SidebarProfileCardInfo>
          <h5>Posts</h5>
          <span>20</span>
        </SidebarProfileCardInfo>
      </SidebarProfileCardInfoContainer>
    </SidebarProfileCardContainer>
  );
};

export default SidebarProfileCard;
