import type { User } from './user';

export interface IPhoto {
  readonly _id: number;
  url: string;
  filename: string;
  thumbnail: string;
}
export interface Comment {
  readonly _id: number;
  content: string;
  readonly post: number;
  author: User;
  created_at: string;
}

export interface IPost {
  readonly _id: number;
  content: string;
  photos: Array<IPhoto>;
  comments: Array<Comment>;
  author: User;
  created_at: string;
}

//For all Posts
export type PostsResponse = Array<IPost>;

//For single post
export interface SinglePostState {
  post?: IPost;
  loading: boolean;
}

export interface CommentForm {
  content: string;
}

export type AddComment = {
  postID: number;
  body: CommentForm;
};

export type CommentResponse = Array<Comment>;

export interface Like {
  readonly _id: number;
  readonly post: number;
  readonly author: number;
}

export type LikeResponse = Array<Like>;
