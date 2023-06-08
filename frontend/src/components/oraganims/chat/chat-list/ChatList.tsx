import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChatListContainer, ChatWrapper, ChatAvatar, ChatName } from './style';
import LastMessage from './LastMessage';
import type { User } from '@/types/user';

type ChatListProps = {
  user: User | undefined;
};

const ChatList: FC<ChatListProps> = ({ user }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/feeds');
  };
  const chatLists = user?.chatLists;
  return (
    <ChatListContainer>
      <button onClick={handleClick}>Back to Feed</button>
      {chatLists?.map((chat) => (
        <ChatWrapper key={chat._id}>
          <ChatAvatar
            src={chat.chat_with.avatar?.thumbnail}
            alt={chat.chat_with.first_name}
          />
          <Link href="#">
            <ChatName>
              <span>{chat.chat_with.first_name}</span>
              <span>{chat.chat_with.last_name}</span>
            </ChatName>
            <LastMessage chat_id={chat._id} />
          </Link>
        </ChatWrapper>
      ))}
    </ChatListContainer>
  );
};

export default ChatList;
