'use client';
import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  ChatWrapper,
  ChatAvatar,
  ChatName,
  ClickToChatRoomWrapper,
} from './style';
import LastMessage from './LastMessage';
import ChatMenuOptions from '../chat-option/menu-list/ChatMenuOptions';
import DeleteChatOptions from '../chat-option/delete-option/DeleteChatOptions';
import { useAppDispatch } from '@/hooks/appStateHooks';
import {
  setCorrespondUser,
  setChatRoomUrl,
} from '@/globalRedux/feature/messengerSlice';
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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [openChatDeleteOption, setOpenChatDeleteOption] =
    useState<boolean>(false);
  const handleOpenDeleteOption = () => {
    setOpenChatDeleteOption(true);
  };
  const handleCloseDeleteOption = () => {
    setOpenChatDeleteOption(false);
  };

  const handClickToChatRoom = (correspondUser: User, chat_id: string) => {
    dispatch(
      setCorrespondUser({
        id: correspondUser._id,
        avatar: correspondUser.avatar?.thumbnail,
        first_name: correspondUser.first_name,
        last_name: correspondUser.last_name,
      })
    );
    router.push(`/messenger/${chat_id}`);
  };

  return (
    <>
      {chatLists?.map((chat) => (
        <ChatWrapper key={chat._id}>
          <ChatAvatar
            src={chat.chat_with.avatar?.thumbnail}
            alt={chat.chat_with.first_name}
          />
          <ClickToChatRoomWrapper
            onClick={() => {
              dispatch(setChatRoomUrl(chat.chatID));
              handClickToChatRoom(chat.chat_with, chat.chatID);
            }}
          >
            <ChatName>
              <span>{chat.chat_with.first_name}</span>
              <span>{chat.chat_with.last_name}</span>
            </ChatName>
            <LastMessage chat_id={chat.chatID} />
          </ClickToChatRoomWrapper>
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
