import { FC } from 'react';
import { ChatOpenerContainer, ChatOpenerButton } from './style';

const ChatOpener: FC = () => {
  return (
    <ChatOpenerContainer>
      <ChatOpenerButton>Messenger</ChatOpenerButton>
    </ChatOpenerContainer>
  );
};

export default ChatOpener;
