'use client';
import { FC } from 'react';
import styled from 'styled-components';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import FormInput from '@/components/atoms/inputs/FormInput';
import type { FormInputProps } from '@/components/atoms/inputs/FormInput';

export const CustomDialog = styled(Dialog)``;

export const CustomDialogTitle = styled(DialogTitle)``;

export const UpdateProfileAvatar = styled.div``;

export const CustomAvatar = styled(Avatar)``;

export const UpdateProfileForm = styled.form``;

export const UpdateProfileFormNameInputs = styled.div``;

export const NameInput: React.FC<FormInputProps> = styled(FormInput)``;

export const UpdateProfileOtherInput: FC<FormInputProps> = styled(FormInput)``;

export const UpdateProfileAboutme = styled.div``;

export const UpdateProfileGenderFiledset = styled.fieldset``;

export const UpdateProfileBirthdayInputWrapper = styled.div``;

export const BirthDayInput: React.FC<FormInputProps> = styled(FormInput)``;
