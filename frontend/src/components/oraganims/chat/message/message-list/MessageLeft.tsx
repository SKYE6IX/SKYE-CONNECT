import { FC, useEffect, useRef } from 'react';
import getSocket from '@/globalRedux/service/socket';
import { useIsMessageInVeiw } from './helper';
import type { MessageProps } from '@/types/chat';
import {
  MessageRowBlue,
  MessageRowLeft,
  MessageText,
  MessageBottom,
} from './style';

interface MessageLeftProps extends MessageProps {
  from: string;
  handleRefetchMessage: () => void;
}
const MessageLeft: FC<MessageLeftProps> = ({
  message_text,
  created_at,
  isEdited,
  isRead,
  message_id,
  handleRefetchMessage,
  from,
}) => {
  const socket = getSocket();
  const messageRef = useRef<HTMLDivElement | null>(null);
  const isMessageRead = useIsMessageInVeiw(messageRef);
  const refProps = isRead ? {} : { ref: messageRef };

  const handleIsMessageRead = () => {
    socket.emit('is_message_read', { message_id: message_id, from: from });
    handleRefetchMessage();
  };
  useEffect(() => {
    isMessageRead && handleIsMessageRead();
  }, [socket, isMessageRead]);

  const time = created_at.slice(11, 16);
  return (
    <MessageRowLeft {...refProps}>
      <MessageRowBlue>
        <MessageText>{message_text}</MessageText>
        <MessageBottom>
          <span>{isEdited ? 'edited' : ''}</span>
          <span>{time}</span>
        </MessageBottom>
      </MessageRowBlue>
    </MessageRowLeft>
  );
};
export default MessageLeft;
