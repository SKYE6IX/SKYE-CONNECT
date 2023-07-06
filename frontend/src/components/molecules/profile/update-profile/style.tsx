'use client';
import { FC } from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import Avatar from '@mui/material/Avatar';
import FormInput from '@/components/atoms/inputs/FormInput';
import type { FormInputProps } from '@/components/atoms/inputs/FormInput';

export const CustomDialog = styled(Dialog)`
  & .MuiPaper-root {
    width: 500px;
  }
`;

export const UpdateProfileAvatar = styled.div`
  position: relative;
  margin: 0 0 0.5rem 1rem;
  input {
    display: none;
  }
  label {
    position: absolute;
    top: 0.77rem;
    left: 0.7rem;
    opacity: 0;
    color: rgba(238, 238, 238, 0.9);
    cursor: pointer;
    transition: opacity 0.6s ease-in;
    &:hover {
      opacity: 1;
    }
  }
`;

export const CustomAvatar = styled(Avatar)`
  width: 70px;
  height: 70px;
`;

export const UpdateProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const UpdateProfileFormNameInputs = styled.div`
  display: flex;
  gap: 0.5em;
`;

export const NameInput: React.FC<FormInputProps> = styled(FormInput)``;

export const UpdateProfileOtherInput: FC<FormInputProps> = styled(FormInput)`
  width: 100%;
`;

export const UpdateProfileAboutme = styled.div`
  display: flex;
  /* gap: 0.5em; */
  width: 100%;
  label {
    font-size: 0.9rem;
    width: 20%;
  }
  textarea {
    width: 80%;
    min-height: 100px;
    resize: none;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 0.9rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    padding: 0.5rem 0.5rem;
    background-color: #eee;
  }
`;

export const UpdateProfileGenderFiledset = styled.fieldset`
  border: none;
  legend {
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export const UpdateProfileBirthdayInputWrapper = styled.div`
  input {
    max-width: 150px;
  }
`;

export const BirthDayInput: React.FC<FormInputProps> = styled(FormInput)``;

export const DropDownWrapper = styled.div`
  & .drop_down {
    background-color: #eee;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #ddd;
    outline: none;
  }
`;

export const UpdateProgressContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
`;
