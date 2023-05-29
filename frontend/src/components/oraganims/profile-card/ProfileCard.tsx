import { FC } from 'react';
import {
  ProfileCardContainer,
  ProfileCardAvatar,
  ProfileCardName,
  ProfileCardAboutMe,
  ProfileCardInfoContainer,
  ProfileCardInfo,
} from './style';
import type { User } from '@/types/user';
type ProfileCardProps = {
  user: User | null;
};
const ProfileCard: FC<ProfileCardProps> = ({ user }) => {
  return (
    <ProfileCardContainer>
      <ProfileCardAvatar alt={user?.first_name} src={user?.avatar?.thumbnail} />
      <ProfileCardName>
        <span>{user?.first_name}</span>
        <span>{user?.last_name}</span>
      </ProfileCardName>
      <ProfileCardAboutMe>{user?.about_me}</ProfileCardAboutMe>
      <ProfileCardInfoContainer>
        <ProfileCardInfo>
          <h5>Follower</h5>
          <span>{user?.followers.length}</span>
        </ProfileCardInfo>
        <ProfileCardInfo>
          <h5>Posts</h5>
          <span>20</span>
        </ProfileCardInfo>
      </ProfileCardInfoContainer>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
