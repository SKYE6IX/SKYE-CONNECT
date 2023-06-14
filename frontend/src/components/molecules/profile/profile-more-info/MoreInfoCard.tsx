import { FC } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';

import { MoreInfoCardRows } from './style';

const MoreInfoCard: FC = () => {
  return (
    <Dialog open={false}>
      <DialogTitle>Additional Info</DialogTitle>
      <DialogContent dividers>
        <MoreInfoCardRows>
          <SummarizeIcon />
          <p>Web developer from Moscow</p>
        </MoreInfoCardRows>
        <MoreInfoCardRows>
          <AlternateEmailIcon />
          <span>Skye6ix</span>
        </MoreInfoCardRows>
      </DialogContent>
      <DialogContent dividers>
        <MoreInfoCardRows>
          <CardGiftcardIcon />
          <span>Birthday: July 27, 1992</span>
        </MoreInfoCardRows>
        <MoreInfoCardRows>
          <FavoriteBorderIcon />
          <span>Relationship: single</span>
        </MoreInfoCardRows>
        <MoreInfoCardRows>
          <HomeIcon />
          <span>Current city: Moscow</span>
        </MoreInfoCardRows>
      </DialogContent>
      <DialogContent dividers>
        <h4>Personal information</h4>
        <p>Language: English</p>
      </DialogContent>
    </Dialog>
  );
};

export default MoreInfoCard;
