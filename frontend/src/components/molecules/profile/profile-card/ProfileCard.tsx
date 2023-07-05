'use client';
import { FC, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MoreInfoCard from '../profile-more-info/MoreInfoCard';
import UpdateProfile from '../update-profile/UpdateProfile';
import {
  ProfileCardContainer,
  CustomAvatar,
  ButtonWrapper,
  ProfileCardTextContentWrapper,
  NamesWrapper,
  OtherInfoWrapper,
} from './style';
import type { User } from '@/types/user';

type ProfileCardProps = {
  user: User | undefined;
  handleRefetchUser: () => void;
};

const ProfileCard: FC<ProfileCardProps> = ({ user, handleRefetchUser }) => {
  const [openMoreInfo, setOpenMoreInfo] = useState<boolean>(false);
  const [openUpdateProfile, setOpenUpdateProfile] = useState<boolean>(false);

  const handleOpenMoreInfo = () => {
    setOpenMoreInfo(true);
  };
  const handleCloseMoreInfo = () => {
    setOpenMoreInfo(false);
  };
  const handleOpenUpdateProfile = () => {
    setOpenUpdateProfile(true);
  };
  const handleCloseUpdateProfile = () => {
    setOpenUpdateProfile(false);
    handleRefetchUser();
  };

  return (
    <ProfileCardContainer>
      <CustomAvatar src={user?.avatar?.thumbnail} alt={user?.first_name} />

      <ProfileCardTextContentWrapper>
        <NamesWrapper>
          <span>{user?.first_name}</span>
          <span>{user?.last_name}</span>
        </NamesWrapper>
        <p>{user?.about_me}</p>
        <OtherInfoWrapper>
          <div>
            {user?.professional && <LocationOnIcon />}
            <span>{user?.city}</span>
          </div>
          <div>
            {user?.professional && <WorkIcon />}
            <span>{user?.professional}</span>
          </div>
        </OtherInfoWrapper>
      </ProfileCardTextContentWrapper>

      <ButtonWrapper>
        <button onClick={handleOpenMoreInfo}>More</button>
        {openMoreInfo && (
          <MoreInfoCard user={user} handleCloseMoreInfo={handleCloseMoreInfo} />
        )}
        <button onClick={handleOpenUpdateProfile}>Edit Profile</button>
        {openUpdateProfile && (
          <UpdateProfile
            user={user}
            handleCloseUpdateProfile={handleCloseUpdateProfile}
          />
        )}
      </ButtonWrapper>
    </ProfileCardContainer>
  );
};
export default ProfileCard;
