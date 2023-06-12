'use client';
import { FC, useState } from 'react';
import { ChatWrapper, ChatAvatar, ChatName, ClickToChatWrapper } from './style';
import LastMessage from './LastMessage';
import ChatMenuOptions from '../chat-option/menu-list/ChatMenuOptions';
import DeleteChatOptions from '../chat-option/delete-option/DeleteChatOptions';
import type { User } from '@/types/user';

type ChatListProps = {
  chatLists: [
    {
      chat_with: User;
      chatID: string;
      _id: number;
    }
  ];
};

const ChatList: FC<ChatListProps> = ({ chatLists }) => {
  const [openChatDeleteOption, setOpenChatDeleteOption] =
    useState<boolean>(false);

  const handleOpenDeleteOption = () => {
    setOpenChatDeleteOption(true);
  };
  const handleCloseDeleteOption = () => {
    setOpenChatDeleteOption(false);
  };

  return (
    <>
      {chatLists?.map((chat) => (
        <ChatWrapper key={chat._id}>
          <ChatAvatar
            src={chat.chat_with.avatar?.thumbnail}
            alt={chat.chat_with.first_name}
          />
          <ClickToChatWrapper>
            <ChatName>
              <span>{chat.chat_with.first_name}</span>
              <span>{chat.chat_with.last_name}</span>
            </ChatName>
            <LastMessage chat_id={chat.chatID} />
          </ClickToChatWrapper>
          <ChatMenuOptions
            handleOpenDeleteChatOption={handleOpenDeleteOption}
          />
          <DeleteChatOptions
            open={openChatDeleteOption}
            handleCloseDeleteOption={handleCloseDeleteOption}
            chat_id={chat.chatID}
            correspond_user_id={chat.chat_with._id}
            avatar={chat.chat_with.avatar?.thumbnail}
            first_name={chat.chat_with.first_name}
          />
        </ChatWrapper>
      ))}
    </>
  );
};
export default ChatList;
