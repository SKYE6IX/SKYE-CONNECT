'use client';
import { FC } from 'react';
import { useRouter } from 'next/navigation';
import LogoutIcon from '@mui/icons-material/Logout';
import { useLogoutMutation } from '@/globalRedux/service/userApi';
import { SignoutButton } from './style';

const SignOut: FC = () => {
  const router = useRouter();
  const [logout, { isLoading }] = useLogoutMutation();
  const handleClick = async () => {
    await logout();
    router.push('/');
  };
  return (
    <SignoutButton onClick={handleClick} disabled={isLoading}>
      <LogoutIcon />
      Sign out
    </SignoutButton>
  );
};

export default SignOut;
