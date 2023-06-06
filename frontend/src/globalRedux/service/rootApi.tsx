'use client';
import { createApi, BaseQueryFn } from '@reduxjs/toolkit/query/react';
import axios, { AxiosRequestConfig, AxiosError } from 'axios';

//Custom baseQuery with axios
const axiosInsance = axios.create({
  withCredentials: true,
});
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axiosInsance({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const rootApi = createApi({
  reducerPath: 'allApi',
  baseQuery: axiosBaseQuery({ baseUrl: process.env.API_URL }),
  tagTypes: ['Posts', 'User', 'Users', 'Comment', 'Likes', 'Chats'],
  endpoints: () => ({}),
});
