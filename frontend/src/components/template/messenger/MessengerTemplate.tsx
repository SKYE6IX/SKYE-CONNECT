'use client';
import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import { useGetUserMessagesQuery } from '@/globalRedux/service/chatApi';
import ChatList from '@/components/oraganims/chat/chat-list/ChatList';
import ChatRoom from '@/components/oraganims/chat/chat-room/ChatRoom';
import { MessengerContainer, MessengerHeader, BackToFeedButton } from './style';
import { useAppSelector } from '@/hooks/appStateHooks';
import { selectChatRoomUrl } from '@/globalRedux/feature/messengerSlice';

const MessengerTemplate: FC = () => {
  const { refetch } = useGetUserMessagesQuery();
  const chatRoomUrl = useAppSelector(selectChatRoomUrl);
  const { data, refetch: refetchUser } = useGetUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const isActive = pathname === chatRoomUrl;
  const chatLists = data?.chatLists!;

  const handleClick = () => {
    router.push('/feeds');
  };
  const handleRefetchUnreadMessage = () => {
    refetch();
  };
  const handleRefetchUser = () => {
    refetchUser();
  };

  return (
    <MessengerContainer>
      {isActive && (
        <ChatRoom
          user={data}
          handleRefetchUnreadMessage={handleRefetchUnreadMessage}
          handleReftchUser={handleRefetchUser}
        />
      )}
      <MessengerHeader>
        <BackToFeedButton onClick={handleClick}>
          <ArrowBackIosIcon />
          Back to feeds
        </BackToFeedButton>
      </MessengerHeader>
      <ChatList
        chatLists={chatLists}
        handleRefetchUnreadMessage={handleRefetchUnreadMessage}
      />
    </MessengerContainer>
  );
};

export default MessengerTemplate;
