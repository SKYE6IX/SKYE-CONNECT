'use client';
import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import {
  FormConatainer,
  FormHead,
  Form,
  FormNameInputWrapper,
  NameInput,
  OtherInput,
  GenderFieldset,
  BirthdayInputContainer,
  BirthDayInput,
} from './style';
import Button from '@/components/atoms/buttons/Button';
import useForm from '@/hooks/useForm';
import { useSignupMutation } from '@/globalRedux/service/userApi';
import type { SignUpForm } from '@/types/user';

const SignUpForm: FC = () => {
  const router = useRouter();
  const [signup, { isLoading }] = useSignupMutation();
  const { formState, handleChange, handleInputChange, resetForm } =
    useForm<SignUpForm>({
      initialState: {
        username: '',
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        gender: '',
        date_of_birth: null,
      },
    });
  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    return (e.target.type = 'text');
  };
  const handleFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    return (e.target.type = 'date');
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(formState)
      .unwrap()
      .then((payload) => {
        resetForm();
        router.push('/feeds');
      })
      .catch((error) => {
        console.log(error);
        router.push('/');
      });
  };

  return (
    <FormConatainer>
      <FormHead>Join and connect with people with no limit!</FormHead>
      <Form onSubmit={handleSubmit}>
        <FormNameInputWrapper>
          <NameInput
            type="text"
            name="first_name"
            id="first_name"
            label="Firstname"
            placeholder=" "
            value={formState.first_name}
            handleChange={handleChange}
          />
          <NameInput
            type="text"
            name="last_name"
            id="last_name"
            label="Lastname"
            placeholder=" "
            value={formState.last_name}
            handleChange={handleChange}
          />
        </FormNameInputWrapper>

        <OtherInput
          type="text"
          name="username"
          id="siginup_username"
          label="Username"
          placeholder=" "
          value={formState.username}
          handleChange={handleChange}
        />
        <OtherInput
          type="text"
          name="email"
          id="email"
          label="Email"
          placeholder=" "
          value={formState.email}
          handleChange={handleChange}
        />
        <OtherInput
          type="password"
          name="password"
          id="sign_up_password"
          label="Password"
          placeholder=" "
          value={formState.password}
          handleChange={handleChange}
        />
        <GenderFieldset>
          <legend>Gender</legend>
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleInputChange}
          />
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleInputChange}
          />
        </GenderFieldset>

        <BirthdayInputContainer>
          <BirthDayInput
            type="text"
            name="date_of_birth"
            id="date_of_birth"
            label="Birthday"
            placeholder=" "
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            handleChange={handleInputChange}
          />
        </BirthdayInputContainer>
        <Button type="submit">Submit</Button>
      </Form>
    </FormConatainer>
  );
};
export default SignUpForm;
