import type { User } from './user';

export interface IMessage {
  _id: number;
  from: string;
  to: string;
  message_text: string;
  created_at: string;
  isEdited: boolean;
  isRead: boolean;
  chat_id: string;
}

export type DeleteMessageProps = {
  chat_id: string;
  message_id: number;
};

export interface IChat {
  _id: string;
  messages: Array<string>;
  chat_room: Array<string>;
  created_at: Date;
}

export interface SendMessageData {
  message: string;
  to: number;
  chat_id: string;
}

export interface EditMessageData {
  message: string;
  message_id: string;
  chat_with_id: number;
}

export interface EditMessageResponse extends DeleteChatResponse {}

export type DeleteChatProps = {
  chat_id: string;
  chat_with_id: number;
};
export interface DeleteChatResponse {
  status: boolean;
}
export interface DeleteMessageResponse extends DeleteChatResponse {
  message_id: string;
}

export type MessageProps = {
  message_text: string;
  created_at: string;
  isEdited: boolean;
  isRead: boolean;
  message_id: number;
};
