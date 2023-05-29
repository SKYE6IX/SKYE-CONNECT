'use client';
import React from 'react';
import styled from 'styled-components';
import FormInput from '@/components/atoms/inputs/FormInput';
import type { FormInputProps } from '@/components/atoms/inputs/FormInput';

export const FormConatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding: 0 0.5rem;
  width: 500px;
  margin-left: auto;
  margin-top: 50px;
`;
export const FormHead = styled.h3`
font-family: 
  font-weight: 700;
  font-size: 2rem;
  color: white;
  margin: 0px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
  button {
    background-color: green;
    color: white;
    padding: 5px 30px;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    cursor: pointer;
  }
`;
export const FormNameInputWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NameInput: React.FC<FormInputProps> = styled(FormInput)``;

export const OtherInput: React.FC<FormInputProps> = styled(FormInput)`
  width: 100%;
`;

export const GenderFieldset = styled.fieldset`
  border: none;
  legend {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
  }
`;
export const BirthdayInputContainer = styled.div`
  input {
    max-width: 150px;
  }
`;
export const BirthDayInput: React.FC<FormInputProps> = styled(FormInput)``;
