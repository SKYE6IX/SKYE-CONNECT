'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import LoginIcon from '@mui/icons-material/Login';
import CircularProgress from '@mui/material/CircularProgress';
import { Form, SignInInput, SubmitButton } from './style';
import { useLoginMutation } from '@/globalRedux/service/userApi';
import { useAppDispatch } from '@/hooks/appStateHooks';
import { setLoginFeedback } from '@/globalRedux/feature/userSlice';
import useForm from '@/hooks/useForm';

interface SignInForm {
  username: string;
  password: string;
}
const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
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
        dispatch(
          setLoginFeedback({
            login_feedback: {
              message: payload.message,
              open_alert: true,
              status: payload.status,
            },
          })
        );
      })
      .catch((error) => {
        dispatch(
          setLoginFeedback({
            login_feedback: {
              message: error.data.message,
              open_alert: true,
              status: error.data.status,
            },
          })
        );
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
      <SubmitButton type="submit">
        {isLoading ? (
          <CircularProgress color="inherit" size="1.2rem" />
        ) : (
          <>
            <LoginIcon />
            Sign In
          </>
        )}
      </SubmitButton>
    </Form>
  );
};

export default SignInForm;
