import { FC } from 'react';
import { useGetMessagesQuery } from '@/globalRedux/service/chatApi';
import { LastMessageTag } from './style';

type LastMessageProps = {
  chat_id: string;
};

const LastMessage: FC<LastMessageProps> = ({ chat_id }) => {
  const { data } = useGetMessagesQuery(chat_id);
  const lastMessage = data?.slice(-1)[0];
  return <LastMessageTag>{lastMessage?.message_text}</LastMessageTag>;
};

export default LastMessage;
