import { FC } from 'react';
import { useGetMessagesQuery } from '@/globalRedux/service/chatApi';

type LastMessageProps = {
  chat_id: number;
};

const LastMessage: FC<LastMessageProps> = ({ chat_id }) => {
  const { data } = useGetMessagesQuery(chat_id);
  console.log(data);
  const lastMessage = data?.slice(-1)[0];
  return <p>{lastMessage?.message_text}</p>;
};

export default LastMessage;
