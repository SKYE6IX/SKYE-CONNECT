import { FC } from 'react';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import SummarizeIcon from '@mui/icons-material/Summarize';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import { MoreInfoCardRows, CustomDialog } from './style';
import type { User } from '@/types/user';

type MoreInfoCardProps = {
  user: User | undefined;
  handleCloseMoreInfo: () => void;
};

const MoreInfoCard: FC<MoreInfoCardProps> = ({ user, handleCloseMoreInfo }) => {
  const date = user?.date_of_birth!;
  const month = new Date(date).toLocaleString('default', {
    month: 'long',
  });
  const year = new Date(date).getFullYear();
  const day = new Date(date).getDate();

  return (
    <CustomDialog open={true} onClose={handleCloseMoreInfo}>
      <DialogTitle>Additional Info</DialogTitle>
      <DialogContent dividers>
        {user?.about_me && (
          <MoreInfoCardRows>
            <SummarizeIcon />
            <p>{user.about_me}</p>
          </MoreInfoCardRows>
        )}
        <MoreInfoCardRows>
          <AlternateEmailIcon />
          <span>{user?.username}</span>
        </MoreInfoCardRows>
      </DialogContent>
      <DialogContent dividers>
        <MoreInfoCardRows>
          <CardGiftcardIcon />
          <span>
            Birthday: {month} {day}, {year}
          </span>
        </MoreInfoCardRows>
        <MoreInfoCardRows>
          <FavoriteBorderIcon />
          <span>Relationship: {user?.relationship || 'Add'}</span>
        </MoreInfoCardRows>
        <MoreInfoCardRows>
          <HomeIcon />
          <span>Current city: {user?.city || 'Add'}</span>
        </MoreInfoCardRows>
      </DialogContent>
      <DialogContent dividers>
        <h4>Personal information</h4>
        <p>Language: English</p>
      </DialogContent>
    </CustomDialog>
  );
};

export default MoreInfoCard;
