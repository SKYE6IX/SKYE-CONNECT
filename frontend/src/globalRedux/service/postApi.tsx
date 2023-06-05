'use client';
import { rootApi } from './rootApi';
import { Socket } from 'socket.io-client';
import {
  PostsResponse,
  IPost,
  AddComment,
  CommentResponse,
  LikeResponse,
  Like,
} from '@/types/post';
// import type { DeleteCommentProps } from '../../component/DeleteComment';
import getSocket from './socket';

let socket: Socket;

export const postsApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, void>({
      query: () => ({ url: '/posts', method: 'GET' }),
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Posts' as const,
                id: _id,
              })),
            ]
          : ['Posts'],
    }),
    getPost: builder.query<IPost, string>({
      query: (id) => ({ url: '/posts/' + id, method: 'GET' }),
    }),
    addPost: builder.mutation<IPost, any>({
      query: (body) => ({ url: '/posts', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'Posts' }],
    }),
    deletePost: builder.mutation<IPost, number>({
      query: (id) => ({ url: '/posts/' + id, method: 'DELETE' }),
      invalidatesTags: (result) => [{ type: 'Posts', id: result?._id }],
    }),
    getComments: builder.query<CommentResponse, number>({
      query: (postID) => ({
        url: '/posts/' + postID + '/comments',
        method: 'GET',
      }),
      providesTags: (result, err, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Comment' as const,
                id: _id,
              })),
            ]
          : ['Comment'],
      async onCacheEntryAdded(
        postID,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;

          socket = getSocket();

          socket.on('comment_created', (data) => {
            if (data.post === postID) {
              updateCachedData((draft) => {
                draft.push(data);
              });
            }
          });
          socket.on('comment_deleted', (data) => {
            if (data.post === postID) {
              updateCachedData((comments) => {
                const filterComments = comments.filter(
                  (comment) => comment._id !== data._id
                );
                return filterComments;
              });
            }
          });

          await cacheEntryRemoved;

          socket.off('comment_created');
          socket.off('comment_deleted');
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addComment: builder.mutation<any, AddComment>({
      query: ({ postID, body }) => ({
        url: '/posts/' + postID + '/comments',
        method: 'POST',
        data: body,
      }),
      invalidatesTags: (result) => [{ type: 'Comment', id: result._id }],
    }),
    deleteComment: builder.mutation<IPost, any>({
      query: ({ commentID, postID }) => ({
        url: `/posts/${postID}/comments/${commentID}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result) => [{ type: 'Comment', id: result?._id }],
    }),
    getPostLikes: builder.query<LikeResponse, number>({
      query: (postID) => ({
        url: '/posts/' + postID + '/likes',
        method: 'GET',
      }),
      providesTags: (result, err, arg) =>
        result
          ? [
              ...result.map(({ _id }) => ({
                type: 'Likes' as const,
                id: _id,
              })),
            ]
          : ['Likes'],

      async onCacheEntryAdded(
        postID,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        try {
          await cacheDataLoaded;
          socket = getSocket();

          socket.on('like_added', (like) => {
            if (like.post === postID) {
              updateCachedData((draft) => {
                draft.push(like);
              });
            }
          });

          socket.on('like_removed', (data) => {
            if (data.post === postID) {
              updateCachedData((likes) => {
                const filterLikes = likes.filter(
                  (like) => like._id !== data._id
                );
                return filterLikes;
              });
            }
          });
          await cacheEntryRemoved;
          socket.off('like_added');
          socket.off('like_removed');
        } catch (error) {
          console.log(error);
        }
      },
    }),
    addLike: builder.mutation<Like, number>({
      query: (postID) => ({
        url: '/posts/' + postID + '/likes',
        method: 'POST',
      }),
      invalidatesTags: (result) => [
        { type: 'Likes', id: result?._id },
        { type: 'User' },
      ],
    }),
    removeLike: builder.mutation<Like, number>({
      query: (postID) => ({
        url: '/posts/' + postID + '/likes',
        method: 'DELETE',
      }),
      invalidatesTags: (result) => [
        { type: 'Likes', id: result?._id },
        { type: 'User' },
      ],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useAddLikeMutation,
  useRemoveLikeMutation,
  useGetCommentsQuery,
  useGetPostLikesQuery,
} = postsApi;
