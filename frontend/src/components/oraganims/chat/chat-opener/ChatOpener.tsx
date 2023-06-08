'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { ChatOpenerContainer, ChatOpenerButton } from './style';

const ChatOpener: FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/messenger');
  };
  return (
    <ChatOpenerContainer>
      <ChatOpenerButton onClick={handleClick}>Messenger</ChatOpenerButton>
    </ChatOpenerContainer>
  );
};
export default ChatOpener;
