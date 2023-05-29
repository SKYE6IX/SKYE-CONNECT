'use client';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/service/store';
import { usersApi } from '@/service/userApi';

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    store.dispatch(usersApi.endpoints.getUser.initiate());
  });

  return <Provider store={store}>{children}</Provider>;
}
