'use client';
import { Socket } from 'socket.io-client';
import { rootApi } from './rootApi';
import getSocket from './socket';
import type {
  IChat,
  SendMessageData,
  IMessage,
  DeleteChatProps,
  DeleteChatResponse,
  DeleteMessageProps,
  DeleteMessageResponse,
  EditMessageData,
  EditMessageResponse,
} from '@/types/chat';
let socket: Socket;

export const chatsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewChat: builder.mutation<IChat, number>({
      query: (chat_with_id) => ({
        url: `/chat/${chat_with_id}`,
        method: 'POST',
      }),
    }),
    removeChatHistory: builder.mutation<DeleteChatResponse, DeleteChatProps>({
      query: ({ chat_id, chat_with_id }) => ({
        url: `/chat/${chat_id}/${chat_with_id}`,
        method: 'PUT',
      }),
      invalidatesTags: ['User'],
    }),
    deleteChat: builder.mutation<DeleteChatResponse, DeleteChatProps>({
      query: ({ chat_id, chat_with_id }) => ({
        url: `/chat/${chat_id}/${chat_with_id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    getMessages: builder.query<IMessage[], number | string>({
      query: (chatID) => ({ url: `/chat/message/${chatID}`, method: 'GET' }),
      providesTags: ['Chats'],
      async onCacheEntryAdded(
        chatID,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;

          socket = getSocket();

          socket.on('private_message', (data: IMessage) => {
            if (chatID === data.chat_id) {
              updateCachedData((draft) => {
                draft.push(data);
              });
            }
          });

          socket.on('message_delete', (data: IMessage) => {
            if (chatID === data.chat_id) {
              updateCachedData((messages) => {
                const filterMessage = messages.filter(
                  (message) => message._id !== data._id
                );
                return filterMessage;
              });
            }
          });

          await cacheEntryRemoved;
          socket.off('private_message');
          socket.off('message_delete');
        } catch (error) {
          console.log(error);
        }
      },
    }),
    sendMessages: builder.mutation<any, SendMessageData>({
      query: (sendMessageData) => ({
        url: `/chat/message/${sendMessageData.chatID}`,
        method: 'POST',
        data: sendMessageData,
      }),
    }),
    editMessage: builder.mutation<EditMessageResponse, EditMessageData>({
      query: ({ message, message_id, chat_with_id }) => ({
        url: `/chat/message/${message_id}`,
        method: 'PUT',
        data: { message, chat_with_id },
      }),
    }),
    deleteMessage: builder.mutation<DeleteMessageResponse, DeleteMessageProps>({
      query: ({ chat_id, message_id }) => ({
        url: `/chat/message/${chat_id}/${message_id}`,
        method: 'DELETE',
      }),
      // invalidatesTags: (result) => [{ type: "Chats", id: result.message_id }],
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useSendMessagesMutation,
  useCreateNewChatMutation,
  useRemoveChatHistoryMutation,
  useDeleteChatMutation,
  useDeleteMessageMutation,
  useEditMessageMutation,
} = chatsApi;
