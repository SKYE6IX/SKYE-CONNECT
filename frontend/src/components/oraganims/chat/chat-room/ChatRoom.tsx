'use client';
import React, { FC, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Avatar } from '@/components/atoms/MUIComponents/Components';
import { CustomDialog, ChatRoomHeader, ChatRoomName, NoMessage } from './style';
import { useGetMessagesQuery } from '@/globalRedux/service/chatApi';
import { MessageRight, MessageLeft } from '../message/message-list/Messages';
import { useAppDispatch, useAppSelector } from '@/hooks/appStateHooks';
import {
  closeChatRoom,
  selectCorrespondUser,
  selectTypingStatus,
} from '@/globalRedux/feature/messengerSlice';
import SendMessage from '../message/send-message/SendMessage';
import type { User } from '@/types/user';

type ChatRoomProps = {
  user: User | undefined;
};

const ChatRoom: FC<ChatRoomProps> = ({ user }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const correspondUser = useAppSelector(selectCorrespondUser);
  const typingStatus = useAppSelector(selectTypingStatus);
  const pathname = usePathname();

  const chat_id = pathname.substring(11);

  const { data, isLoading } = useGetMessagesQuery(chat_id);
  const messages = isLoading ? null : data;

  const handleClose = () => {
    dispatch(closeChatRoom());
    router.push('/messenger');
  };

  function scrollToTop<T>(
    dep: T
  ): React.MutableRefObject<HTMLDivElement | undefined> {
    const ref = useRef<HTMLDivElement>();
    useEffect(() => {
      setTimeout(() => {
        if (ref.current != undefined) {
          ref.current.scrollTop = ref.current.scrollHeight;
        }
      }, 100);
    }, [dep]);
    return ref;
  }
  const scrollChatToTopRef = scrollToTop(messages);

  return (
    <CustomDialog
      open={true}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle>
        <ChatRoomHeader>
          <Avatar src={correspondUser.avatar} alt={correspondUser.first_name} />
          <div>
            <ChatRoomName>
              <span>{correspondUser.first_name}</span>
              <span>{correspondUser.last_name}</span>
            </ChatRoomName>
            {typingStatus && <p>Typing...</p>}
          </div>
        </ChatRoomHeader>
      </DialogTitle>
      <DialogContent dividers ref={scrollChatToTopRef}>
        {messages?.length ? (
          <>
            {messages.map((message) => (
              <div key={message._id}>
                {message.from === String(correspondUser.id) && (
                  <MessageLeft
                    message_text={message.message_text}
                    created_at={message.created_at}
                    isEdited={message.isEdited}
                  />
                )}

                {message.from === String(user?._id) && (
                  <MessageRight
                    message_text={message.message_text}
                    created_at={message.created_at}
                    chat_id={message.chat_id}
                    message_id={message._id}
                    isEdited={message.isEdited}
                  />
                )}
              </div>
            ))}
          </>
        ) : (
          <NoMessage>
            <p>No Message</p>
          </NoMessage>
        )}
      </DialogContent>
      <DialogActions>
        <SendMessage chat_id={chat_id} to={correspondUser.id} />
      </DialogActions>
    </CustomDialog>
  );
};

export default ChatRoom;
