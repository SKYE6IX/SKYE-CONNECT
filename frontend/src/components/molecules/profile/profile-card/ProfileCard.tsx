import { FC } from 'react';
import {
  ProfileCardContainer,
  ProfileCardTextContentWrapper,
  CustomAvatar,
  ProfileCardButtons,
} from './style';

const ProfileCard: FC = () => {
  return (
    <ProfileCardContainer>
      <CustomAvatar />
      <ProfileCardTextContentWrapper>
        <span>Azeez</span>
        <span>Abiola</span>
        <p>Web Developer living in Moscow</p>
        <span>Moscow</span>
        <span>Software Engineer</span>
      </ProfileCardTextContentWrapper>
      <ProfileCardButtons>More</ProfileCardButtons>
      <ProfileCardButtons>Edit Profile</ProfileCardButtons>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
