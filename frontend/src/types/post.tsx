import type { User } from './user';

export interface IPhoto {
  readonly _id: number;
  url: string;
  filename: string;
  thumbnail: string;
}
export interface IComment {
  readonly _id: number;
  content: string;
}
export interface IPost {
  readonly _id: number;
  content: string;
  photos: Array<IPhoto>;
  comments: Array<IComment>;
  author: User;
}

export interface CommentForm {
  content: string;
}

//For all Posts
export type PostsResponse = Array<IPost>;

//For single post
export interface SinglePostState {
  post?: IPost;
  loading: boolean;
}

export type AddComment = {
  postID: number;
  body: CommentForm;
};

export interface Comment {
  readonly _id: number;
  content: string;
  readonly post?: number;
  author?: User;
}

export type CommentResponse = Array<Comment>;

export interface Like {
  readonly _id: number;
  readonly post: number;
  readonly author: number;
}

export type LikeResponse = Array<Like>;
