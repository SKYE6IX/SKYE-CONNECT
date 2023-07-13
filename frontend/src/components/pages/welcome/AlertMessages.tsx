'use client';
import React from 'react';
import Slide, { SlideProps } from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '@/hooks/appStateHooks';
import {
  selectLoginFeedback,
  setLoginFeedback,
} from '@/globalRedux/feature/userSlice';

type TransitionProps = Omit<SlideProps, 'direction'>;
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const CustomSnakbar = styled(Snackbar)`
  &.MuiSnackbar-root {
    top: 70px;
  }
`;

const AlerMessages = () => {
  const dispatch = useAppDispatch();
  const { message, open_alert, status } = useAppSelector(selectLoginFeedback);

  const handleClose = (evt?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(
      setLoginFeedback({
        login_feedback: {
          message: '',
          open_alert: false,
          status: status,
        },
      })
    );
  };
  const transition = (props: TransitionProps) => {
    return <Slide {...props} direction="left" />;
  };

  return (
    <CustomSnakbar
      open={open_alert}
      autoHideDuration={7000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      TransitionComponent={transition}
    >
      <Alert onClose={handleClose} severity={status ? 'success' : 'error'}>
        {message}
      </Alert>
    </CustomSnakbar>
  );
};

export default AlerMessages;
