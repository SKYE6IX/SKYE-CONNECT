import { FC, useState } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import MessageOptions from '../message-option/MessageOptions';
import type { MessageProps } from '@/types/chat';
import {
  MessageRowRight,
  MessageRowOrange,
  MessageText,
  MessageBottom,
} from './style';

interface MessageRightProps extends MessageProps {
  chat_id: string;
}
const MessageRight: FC<MessageRightProps> = ({
  message_text,
  created_at,
  message_id,
  chat_id,
  isEdited,
  isRead,
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
          <MessageBottom>
            <span>{isEdited ? 'edited' : ''}</span>
            <div>
              <span>{time}</span>
              {isRead ? <DoneAllIcon /> : <DoneIcon />}
            </div>
          </MessageBottom>
        </MessageRowOrange>
      </MessageRowRight>
      <MessageOptions
        anchorEl={anchorEl}
        open={openMessageOptions}
        handleClose={handleCloseMessageOptions}
        message_id={message_id}
        chat_id={chat_id}
        message_text={message_text}
      />
    </>
  );
};
export default MessageRight;
