'use client';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkIcon from '@mui/icons-material/Work';
import MoreInfoCard from '../profile-more-info/MoreInfoCard';
import { useCreateNewChatMutation } from '@/globalRedux/service/chatApi';
import { useAddFollowerMutation } from '@/globalRedux/service/userApi';
import { useAppDispatch } from '@/hooks/appStateHooks';
import {
  setChatRoomUrl,
  setCorrespondUser,
} from '@/globalRedux/feature/messengerSlice';
import {
  ProfileCardContainer,
  CustomAvatar,
  ButtonWrapper,
  ProfileCardTextContentWrapper,
  NamesWrapper,
  OtherInfoWrapper,
  ChatButton,
} from './style';
import type { User } from '@/types/user';

type ProfileCardProps = {
  other_user: User;
  authUser: User | undefined;
  handleReftch: () => void;
};

const OtherUsersProfileCard: FC<ProfileCardProps> = ({
  other_user,
  authUser,
  handleReftch,
}) => {
  const [createNewChat] = useCreateNewChatMutation();
  const [addFollower, { isLoading: isAddFollowerLoading }] =
    useAddFollowerMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [openMoreInfo, setOpenMoreInfo] = useState<boolean>(false);

  const handleOpenMoreInfo = () => {
    setOpenMoreInfo(true);
  };
  const handleCloseMoreInfo = () => {
    setOpenMoreInfo(false);
  };

  const handleStartChatButton = async (follow_user_id: number) => {
    await createNewChat(follow_user_id)
      .unwrap()
      .then((result) => {
        router.push(`/messenger/${result._id}`);
        dispatch(setChatRoomUrl(result._id));
      });
  };

  const handleSetCorrespondUser = (correspondUser: User) => {
    dispatch(
      setCorrespondUser({
        id: correspondUser._id,
        avatar: correspondUser.avatar?.thumbnail,
        first_name: correspondUser.first_name,
        last_name: correspondUser.last_name,
      })
    );
  };

  const handleAddFollower = async (other_user_id: number) => {
    await addFollower(other_user_id)
      .unwrap()
      .then((res) => {
        if (res.status === true) {
          handleReftch();
        }
      });
  };

  const isFollowerExist = (
    user: User | undefined,
    otherUserId: number
  ): boolean | undefined => {
    const isFollowerExist = user?.following?.some((followingUser) => {
      return String(followingUser._id) === String(otherUserId);
    });
    return isFollowerExist;
  };

  return (
    <ProfileCardContainer>
      <CustomAvatar
        src={other_user?.avatar?.thumbnail}
        alt={other_user?.first_name}
      />
      <ProfileCardTextContentWrapper>
        <NamesWrapper>
          <span>{other_user?.first_name}</span>
          <span>{other_user?.last_name}</span>
        </NamesWrapper>
        <p>{other_user?.about_me}</p>
        <OtherInfoWrapper>
          <div>
            <LocationOnIcon />
            <span>{other_user?.city}</span>
          </div>
          <div>
            <WorkIcon />
            <span>{other_user?.professional}</span>
          </div>
        </OtherInfoWrapper>
      </ProfileCardTextContentWrapper>

      <ButtonWrapper>
        <button onClick={handleOpenMoreInfo}>More</button>
        {openMoreInfo && (
          <MoreInfoCard
            user={other_user}
            handleCloseMoreInfo={handleCloseMoreInfo}
          />
        )}
        <ChatButton>
          <button
            onClick={() => {
              handleStartChatButton(other_user._id);
              handleSetCorrespondUser(other_user);
            }}
          >
            <ChatIcon />
          </button>
        </ChatButton>
        {isFollowerExist(authUser, other_user._id) ? (
          <span>Following</span>
        ) : (
          <button
            onClick={() => handleAddFollower(other_user._id)}
            disabled={isAddFollowerLoading}
          >
            Follow
          </button>
        )}
      </ButtonWrapper>
    </ProfileCardContainer>
  );
};
export default OtherUsersProfileCard;
