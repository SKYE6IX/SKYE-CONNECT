import { FC } from 'react';
import { useRouter } from 'next/navigation';
import ChatIcon from '@mui/icons-material/Chat';
import { useCreateNewChatMutation } from '@/globalRedux/service/chatApi';
import { useAppDispatch } from '@/hooks/appStateHooks';
import {
  setChatRoomUrl,
  setCorrespondUser,
} from '@/globalRedux/feature/messengerSlice';
import {
  FollowersCardContainer,
  Followers,
  CustomAvatar,
  FollowersCardTextContents,
  FollowersCardsAction,
} from './style';
import type { User } from '@/types/user';

type FollowersCardProps = {
  followers: User[];
};

const FollowersCard: FC<FollowersCardProps> = ({ followers }) => {
  const [createNewChat] = useCreateNewChatMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const padTextEnd = (txt: string) => {
    const padResult = txt.split(' ').slice(0, 3).join(' ').padEnd(25, '.');
    return padResult;
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

  return (
    <FollowersCardContainer>
      <h4>Followers</h4>
      {followers?.map((follower) => (
        <Followers key={follower._id}>
          <CustomAvatar
            src={follower.avatar?.thumbnail}
            alt={follower.first_name}
          />
          <FollowersCardTextContents>
            <div>
              <span>{follower.first_name}</span>
              <span>{follower.last_name}</span>
            </div>
            <p>{follower.about_me && padTextEnd(follower.about_me)}</p>
          </FollowersCardTextContents>
          <FollowersCardsAction>
            <button
              onClick={() => {
                handleStartChatButton(follower._id);
                handleSetCorrespondUser(follower);
              }}
            >
              <ChatIcon />
            </button>
          </FollowersCardsAction>
        </Followers>
      ))}
    </FollowersCardContainer>
  );
};

export default FollowersCard;
