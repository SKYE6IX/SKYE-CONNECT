import type { PostsResponse } from './post';

export interface User {
  readonly _id: number;
  avatar: {
    url: string;
    filename: string;
    thumbnail: string;
  };
  email: string;
  username: string;
  posts: PostsResponse;
  likePosts: PostsResponse;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date | null;
  country: string;
  city: string;
  professional?: string;
  about_me?: string;
  followers: User[];
  following: User[];
  chatLists: [{ chat_with: User; chatID: string; _id: number }];
}

export type GetUserResponse = User & {
  status: boolean;
};
export interface LoginForm {
  username: string;
  password: string;
}
export interface Response {
  status: boolean;
  message: string;
}

export interface SignUpForm {
  username: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  gender: string;
  date_of_birth: Date | null;
}

export interface UpdateProfileFormTypes extends SignUpForm {
  avatar?: any;
  about_me?: string;
  country?: string;
  city?: string;
  professional?: string;
}

export type UpdateProfileMutationInput = {
  userID: number;
  body: UpdateProfileFormTypes;
};

export type CardsProps = {
  user: User | undefined;
  isUserDataLoading: boolean;
};
