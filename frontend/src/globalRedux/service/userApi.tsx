'use client';
import { rootApi } from './rootApi';
import type {
  GetUserResponse,
  Response,
  LoginForm,
  SignUpForm,
  UpdateProfileMutationInput,
  User,
} from '@/types/user';

interface UpdateResponse {
  status: string;
}

export const usersApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<GetUserResponse, void>({
      query: () => ({ url: '/user/auth', method: 'GET' }),
      providesTags: ['User'],
    }),
    getAllUser: builder.query<User[], void>({
      query: () => ({ url: '/user', method: 'GET' }),
      providesTags: ['Users'],
    }),
    getSingleUser: builder.query<User, number>({
      query: (userID) => ({ url: `/user/${userID}`, method: 'GET' }),
    }),
    updateUser: builder.mutation<UpdateResponse, any>({
      query: ({ userID, body }) => ({
        url: `/user/${userID}/update`,
        method: 'PUT',
        data: body,
      }),
    }),
    login: builder.mutation<Response, LoginForm>({
      query: (body) => ({ url: '/user/signin', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'User' }, { type: 'Users' }],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({ url: '/user/signout', method: 'POST' }),
      invalidatesTags: ['User'],
    }),
    signup: builder.mutation<Response, SignUpForm>({
      query: (body) => ({ url: '/user/signup', method: 'POST', data: body }),
      invalidatesTags: ['User'],
    }),
    addFollower: builder.mutation<any, number>({
      query: (followerID) => ({
        url: `/user/addfollower/${followerID}`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User' }, { type: 'Users' }],
    }),
    removeFollower: builder.mutation<any, number>({
      query: (followerID) => ({
        url: `/user/removefollower/${followerID}`,
        method: 'POST',
      }),
      invalidatesTags: [{ type: 'User' }, { type: 'Users' }],
    }),
  }),
});

export const {
  useLoginMutation,
  useGetUserQuery,
  useLogoutMutation,
  useSignupMutation,
  useUpdateUserMutation,
  useGetAllUserQuery,
  useAddFollowerMutation,
  useGetSingleUserQuery,
  useRemoveFollowerMutation,
} = usersApi;
