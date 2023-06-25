'use client';
import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useGetUserQuery } from '@/globalRedux/service/userApi';
import ChatList from '@/components/oraganims/chat/chat-list/ChatList';
import ChatRoom from '@/components/oraganims/chat/chat-room/ChatRoom';
import { MessengerContainer, MessengerHeader, BackToFeedButton } from './style';
import { useAppSelector } from '@/hooks/appStateHooks';
import { selectChatRoomUrl } from '@/globalRedux/feature/messengerSlice';

const MessengerTemplate: FC = () => {
  const chatRoomUrl = useAppSelector(selectChatRoomUrl);
  const { data } = useGetUserQuery();
  const router = useRouter();
  const pathname = usePathname();
  const chatLists = data?.chatLists!;
  const handleClick = () => {
    router.push('/feeds');
  };

  console.log(chatRoomUrl);

  const isActive = pathname === chatRoomUrl;

  return (
    <MessengerContainer>
      {isActive && <ChatRoom user={data} />}
      <MessengerHeader>
        <BackToFeedButton onClick={handleClick}>
          <ArrowBackIosIcon />
          Back to feeds
        </BackToFeedButton>
      </MessengerHeader>
      <ChatList chatLists={chatLists} />
    </MessengerContainer>
  );
};

export default MessengerTemplate;
