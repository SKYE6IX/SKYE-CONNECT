'use client';
import React from 'react';
import styled from 'styled-components';
import FormInput, { FormInputProps } from '@/components/atoms/inputs/FormInput';

export const Form = styled.form`
  display: flex;
  gap: 0.8em;
  margin-left: auto;
`;

export const SignInInput: React.FC<FormInputProps> = styled(FormInput)`
  input {
    height: 45px;
  }
`;

export const SubmitButton = styled.button`
  font-weight: 500;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  max-height: 45px;
  display: flex;
  gap: 0.2em;
  align-items: center;
`;
