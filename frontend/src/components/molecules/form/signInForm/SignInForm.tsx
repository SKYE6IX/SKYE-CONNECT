'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@/components/atoms/buttons/Button';
import { Form, SignInInput } from './style';
import { useLoginMutation } from '@/service/userApi';
import useForm from '@/hooks/useForm';

interface SignInForm {
  username: string;
  password: string;
}

const SignInForm: FC = () => {
  const router = useRouter();
  const { formState, handleChange, resetForm } = useForm<SignInForm>({
    initialState: {
      username: '',
      password: '',
    },
  });
  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(formState)
      .unwrap()
      .then((payload) => {
        router.push('/feeds');
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SignInInput
        id="username"
        type="text"
        name="username"
        placeholder=" "
        label="Username"
        handleChange={handleChange}
        value={formState.username}
      />
      <SignInInput
        id="sign_in_password"
        type="password"
        name="password"
        placeholder=" "
        label="Password"
        handleChange={handleChange}
        value={formState.password}
      />
      <Button type="submit">
        <LoginIcon />
        Sign In
      </Button>
    </Form>
  );
};

export default SignInForm;
