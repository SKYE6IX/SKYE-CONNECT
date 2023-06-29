'use client';
import React, { FC, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import getSocket from '@/globalRedux/service/socket';
import {
  useSendMessagesMutation,
  useEditMessageMutation,
} from '@/globalRedux/service/chatApi';
import { useAppSelector, useAppDispatch } from '@/hooks/appStateHooks';
import {
  selectEditMessage,
  clearEditMessage,
  setTypingStatus,
} from '@/globalRedux/feature/messengerSlice';
import {
  SendMessageWrapper,
  SendMessageForm,
  SendMessageFormTextArea,
  SendMessageButton,
} from './style';
import useForm from '@/hooks/useForm';

interface MessageForm {
  message: string;
}
type SendMessageProps = {
  chat_id: string;
  to: number;
};

const SendMessage: FC<SendMessageProps> = ({ chat_id, to }) => {
  const editMessage = useAppSelector(selectEditMessage);
  const dispatch = useAppDispatch();
  const [sendMessage] = useSendMessagesMutation();
  const [sendEditMessage] = useEditMessageMutation();
  const socket = getSocket();

  const { formState, handleChange, resetForm } = useForm<MessageForm>({
    initialState: {
      message: editMessage.isEditing ? editMessage.message_edit_text : '',
    },
  });

  //SETTING USER TYPING STATE
  useEffect(() => {
    socket.on('typingResponse', (data) => {
      dispatch(setTypingStatus(data.status));
    });
    return () => {
      socket.off('typingResponse');
    };
  }, [socket]);

  //Control for the height in the textarea
  const textAreaRef =
    React.useRef() as React.MutableRefObject<HTMLTextAreaElement>;
  const textArea = textAreaRef.current;
  useEffect(() => {
    if (textArea) {
      textArea.style.height = '0px';
      const scrollHeight = textArea.scrollHeight;
      textArea.style.height = scrollHeight + 'px';
    }
  }, [textArea, formState.message]);
  //** End for control settings in textarea */

  const handleSumbit = async (e: React.FormEvent) => {
    e.preventDefault();
    const sendMessageData = {
      message: formState.message,
      chat_id: chat_id,
      to: to,
    };
    if (formState.message) {
      editMessage.isEditing
        ? sendEditMessage({
            message: formState.message,
            message_id: editMessage.message_id,
            chat_with_id: to,
          })
            .unwrap()
            .then((res) => {
              if (res.status === true) {
                dispatch(clearEditMessage());
              }
            })
        : sendMessage(sendMessageData);
    }
    resetForm();
  };

  const handleFocus = () => {
    socket.emit('typing:start', { to: to });
  };
  const handleBlur = () => {
    socket.emit('typing:stop', { to: to });
  };

  return (
    <SendMessageWrapper>
      <SendMessageForm onSubmit={handleSumbit}>
        <SendMessageFormTextArea
          name="message"
          onChange={handleChange}
          value={formState.message}
          rows={1}
          ref={textAreaRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <SendMessageButton type="submit">
          <ArrowUpwardIcon />
        </SendMessageButton>
      </SendMessageForm>
    </SendMessageWrapper>
  );
};

export default SendMessage;
