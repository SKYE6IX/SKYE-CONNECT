import { FC } from 'react';
import {
  MessageRowRight,
  MessageRowBlue,
  MessageRowLeft,
  MessageRowOrange,
  MessageText,
} from './style';

type MessageProps = {
  message_text: string;
  created_at: string;
};

export const MessageLeft: FC<MessageProps> = ({ message_text, created_at }) => {
  const time = created_at.slice(11, 16);
  return (
    <MessageRowLeft>
      <MessageRowBlue>
        <MessageText>{message_text}</MessageText>
        <span>{time}</span>
      </MessageRowBlue>
    </MessageRowLeft>
  );
};

export const MessageRight: FC<MessageProps> = ({
  message_text,
  created_at,
}) => {
  const time = created_at.slice(11, 16);
  return (
    <MessageRowRight>
      <MessageRowOrange>
        <MessageText>{message_text}</MessageText>
        <span>{time}</span>
      </MessageRowOrange>
    </MessageRowRight>
  );
};
