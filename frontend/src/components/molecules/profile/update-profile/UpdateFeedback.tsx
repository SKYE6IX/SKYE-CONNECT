'use client';
import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Slide from '@mui/material/Slide';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { TransitionProps } from '@mui/material/transitions';

type UpdateFeedbackProps = {
  handleClose: () => void;
};

export const UpdateFeedback: FC<UpdateFeedbackProps> = ({ handleClose }) => {
  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  return (
    <Dialog
      open={true}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Profile Updated!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};

export const UpdateProgress = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress style={{ width: '70px', height: '70px' }} />
    </Box>
  );
};
