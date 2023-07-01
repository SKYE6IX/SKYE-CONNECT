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

    getUserMessages: builder.query<IMessage[], void>({
      query: () => ({ url: '/chat/message', method: 'GET' }),
      transformResponse: (responseData: IMessage[]) => {
        return responseData.filter((response) => {
          return response.isRead === false;
        });
      },
      providesTags: ['Chats'],
      async onCacheEntryAdded(
        chat_id,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;

          socket = getSocket();

          socket.on('new_message_notification', (data: IMessage) => {
            if (!data.isRead) {
              updateCachedData((draft) => {
                draft.push(data);
              });
            }
          });
        } catch (error) {
          console.log(error);
        }

        await cacheEntryRemoved;
        socket.off('new_message_notification');
      },
    }),

    getMessages: builder.query<IMessage[], number | string>({
      query: (chat_id) => ({ url: `/chat/message/${chat_id}`, method: 'GET' }),
      providesTags: ['Chats'],
      async onCacheEntryAdded(
        chat_id,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;

          socket = getSocket();

          socket.on('private_message', (data: IMessage) => {
            if (chat_id === data.chat_id) {
              updateCachedData((draft) => {
                draft.push(data);
              });
            }
          });

          socket.on('message_edit', (data: IMessage) => {
            if (chat_id === data.chat_id) {
              updateCachedData((draft) => {
                const indexOfMessage = draft.findIndex(
                  (message) => message._id === data._id
                );
                draft[indexOfMessage].message_text = data.message_text;
                draft[indexOfMessage].isEdited = data.isEdited;
              });
            }
          });

          socket.on('message_delete', (data: IMessage) => {
            if (chat_id === data.chat_id) {
              updateCachedData((messages) => {
                const filterMessage = messages.filter(
                  (message) => message._id !== data._id
                );
                return filterMessage;
              });
            }
          });

          socket.on('is_message_read_res', (data: IMessage) => {
            if (chat_id === data.chat_id) {
              updateCachedData((draft) => {
                const indexOfMessage = draft.findIndex(
                  (message) => message._id === data._id
                );
                draft[indexOfMessage].isRead = data.isRead;
              });
            }
          });

          await cacheEntryRemoved;

          socket.off('private_message');
          socket.off('message_edit');
          socket.off('message_delete');
          socket.off('is_message_read_res');
        } catch (error) {
          console.log(error);
        }
      },
    }),

    sendMessages: builder.mutation<IMessage, SendMessageData>({
      query: (sendMessageData) => ({
        url: `/chat/message/${sendMessageData.chat_id}`,
        method: 'POST',
        data: sendMessageData,
      }),
    }),
    editMessage: builder.mutation<EditMessageResponse, EditMessageData>({
      query: ({ message, message_id, chat_with_id }) => ({
        url: `/chat/message/${message_id}/update`,
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
  useGetUserMessagesQuery,
} = chatsApi;
