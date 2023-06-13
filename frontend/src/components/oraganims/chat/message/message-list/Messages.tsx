import { FC, useState } from 'react';
import {
  MessageRowRight,
  MessageRowBlue,
  MessageRowLeft,
  MessageRowOrange,
  MessageText,
} from './style';
import MessageOptions from '../message-option/MessageOptions';

type MessageProps = {
  message_text: string;
  created_at: string;
};
interface MessageRightProps extends MessageProps {
  chat_id: string;
  message_id: number;
}

//**MESSAGE LEFT COMPONENTS FUNCTION */
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

//**MESSAGE RIGHT COMPONENTS FUNCTION */
export const MessageRight: FC<MessageRightProps> = ({
  message_text,
  created_at,
  message_id,
  chat_id,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMessageOptions = Boolean(anchorEl);

  const handleOpenMessageOptions = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMessageOptions = () => {
    setAnchorEl(null);
  };

  const time = created_at.slice(11, 16);
  return (
    <>
      <MessageRowRight
        aria-haspopup={true}
        aria-expanded={openMessageOptions ? 'true' : undefined}
        onClick={handleOpenMessageOptions}
      >
        <MessageRowOrange>
          <MessageText>{message_text}</MessageText>
          <span>{time}</span>
        </MessageRowOrange>
      </MessageRowRight>
      <MessageOptions
        anchorEl={anchorEl}
        open={openMessageOptions}
        handleClose={handleCloseMessageOptions}
        message_id={message_id}
        chat_id={chat_id}
      />
    </>
  );
};
