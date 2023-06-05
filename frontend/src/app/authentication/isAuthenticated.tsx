import axios from 'axios';
import { cookies } from 'next/headers';
import type { GetUserResponse } from '@/types/user';

const axiosInsance = axios.create({
  withCredentials: true,
  baseURL: process.env.API_URL,
});
export const isAuthenticated = async () => {
  const cookieHeader = cookies();
  const token = cookieHeader.get('skye-connect-session');
  return await axiosInsance
    .get<GetUserResponse>('/user/auth', {
      headers: {
        Cookie: `${token?.name}=${token?.value}`,
      },
    })
    .then((authUser) => {
      if (authUser.data.status === false) {
        return null;
      } else {
        return authUser.data;
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
