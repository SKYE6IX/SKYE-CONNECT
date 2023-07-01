'use client';
import { FC, useState, useEffect } from 'react';
import Badge from '@mui/material/Badge';
import { useRouter } from 'next/navigation';
import { useGetUserMessagesQuery } from '@/globalRedux/service/chatApi';
import { ChatOpenerContainer, ChatOpenerButton } from './style';

const ChatOpener: FC = () => {
  const [unReadMessage, setUnReadMessage] = useState(0);
  const { data, isLoading } = useGetUserMessagesQuery();
  const router = useRouter();
  const handleClick = () => {
    router.push('/messenger');
  };

  useEffect(() => {
    if (!isLoading && data != undefined) {
      setUnReadMessage(data.length);
    }
  }, [data]);

  return (
    <ChatOpenerContainer>
      <ChatOpenerButton onClick={handleClick}>Messenger</ChatOpenerButton>
      <Badge badgeContent={unReadMessage} color="primary" />
    </ChatOpenerContainer>
  );
};
export default ChatOpener;
